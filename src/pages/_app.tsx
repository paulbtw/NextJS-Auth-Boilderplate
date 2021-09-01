import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import DefaultLayout from '../layout/DefaultLayout';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
