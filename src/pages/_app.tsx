import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../libs/apollo/apolloClient';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={`${process.env.NEXT_PUBLIC_APP_URL}/`}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE}
    >
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default MyApp
