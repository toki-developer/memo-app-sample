import { createHttpLink, NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import type { AppProps } from "next/app";
import { useMemo } from "react";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient: ApolloClient<NormalizedCacheObject>;
let getAccessTokenSilently: () => Promise<string | null>;

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {},
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
});

const authLink = setContext(async (_, { headers }) => {
  const getAccessToken = async () => {
    try {
      return await getAccessTokenSilently();
    } catch (error) {
      return null;
    }
  };
  const accessToken = await getAccessToken();
  return accessToken
    ? { headers: { ...headers, authorization: `Bearer ${accessToken}` } }
    : { headers };
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: typeof window === "undefined" ? httpLink : authLink.concat(httpLink),
    cache,
  });
};

export const initializeApollo = (
  initialState: AppProps["pageProps"] = null
) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // ページにApollo Clientを使用したNext.jsのデータ取得メソッドがある場合、初期状態はここでハイドレーションされます。
  if (initialState) {
    // クライアント側のデータ取得中に読み込まれた既存のキャッシュを取得します。
    const existingCache = _apolloClient.extract();

    // 既存のキャッシュをgetStaticProps/getServerSidePropsから渡されたデータにマージします。
    const data = merge(initialState, existingCache, {
      // オブジェクトの平等性を利用して配列を結合する。
      arrayMerge: (destinationArray, sourceArray) => {
        return [
          ...sourceArray,
          ...destinationArray.filter((d) => {
            return sourceArray.every((s) => {
              return !isEqual(d, s);
            });
          }),
        ];
      },
    });

    // マージされたデータでキャッシュを復元する。
    _apolloClient.cache.restore(data);
  }

  // SSGとSSRでは、常に新しいApollo Clientを作成します。
  if (typeof window === "undefined") {
    return _apolloClient;
  }

  // クライアントで一度アポロクライアントを作成。
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps["pageProps"]
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
};

export const useApollo = (pageProps: AppProps["pageProps"]) => {
  const auth0 = useAuth0();
  getAccessTokenSilently = auth0.getAccessTokenSilently;
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => {
    return initializeApollo(state);
  }, [state]);
  return store;
};
