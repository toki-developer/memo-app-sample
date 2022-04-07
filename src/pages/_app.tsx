import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../libs/apollo/apolloClient';
import { Auth0Provider } from '@auth0/auth0-react';
import { VFC } from 'react';
import { AbortController } from "abort-controller";
import fetch, { Headers, Request, Response } from "node-fetch";

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={`${process.env.NEXT_PUBLIC_APP_URL}/`}
      audience={process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT}
    >
      <ApolloContext pageProps={pageProps}>
        <Component {...pageProps} />
      </ApolloContext>
    </Auth0Provider>
  );
}

type ApolloContextProos = {
  pageProps: AppProps["pageProps"];
  children: React.ReactNode;
};

const ApolloContext: VFC<ApolloContextProos> = (props) => {
  const apolloClient = useApollo(props.pageProps);
  return <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>;
};

export default MyApp
