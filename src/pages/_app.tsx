import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { Router } from 'next/dist/client/router';
import {
  AppInitialProps,
  NextComponentType,
  NextPageContext,
} from 'next/dist/shared/lib/utils';

import { Auth } from '../components/Auth';
import DefaultLayout from '../layout/DefaultLayout';
import theme from '../theme/theme';
import { AuthEnabledComponentConfig } from '../types/auth';

type AppProps<P = {}> = AppInitialProps & {
  Component: NextComponentType<NextPageContext, any, P> &
    AuthEnabledComponentConfig;
  router: Router;
  __N_SSG?: boolean | undefined;
  __N_SSP?: boolean | undefined;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <DefaultLayout>
          {Component.auth ? (
            <Auth auth={Component.auth}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </DefaultLayout>
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
