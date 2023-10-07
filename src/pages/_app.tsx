import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import AppContextProvider from '@mactech/utility/AppContextProvider';
import { Provider } from 'react-redux';
import AppThemeProvider from '@mactech/utility/AppThemeProvider';
import AppStyleProvider from '@mactech/utility/AppStyleProvider';
import AppLocaleProvider from '@mactech/utility/AppLocaleProvider';
import FirebaseAuthProvider from '@mactech/services/auth/firebase/FirebaseAuthProvider';
import JWTAuthProvider from '@mactech/services/auth/jwt-auth/JWTAuthProvider';
import AuthRoutes from '@mactech/utility/AuthRoutes';
import { useStore } from '../redux/store'; // Client-side cache, shared for the whole session of the user in the browser.
import '@mactech/services/index';

import '../../public/assets/styles/index.css';
import '../shared/vendors/index.css';
import 'react-toastify/dist/ReactToastify.css';

//import '../libs/@mactech/components/sliders/coverflow/styles.css'
import { EmotionCache } from '@emotion/cache';

import { appInformation } from 'shared/constants/AppConst';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

import { NextUIProvider } from "@nextui-org/react"

import { darkTheme, lightTheme } from '@mactech/libs/@nextui/styles'

// Import the styles provided by the react-pdf-viewer packages
//import '@react-pdf-viewer/core/lib/styles/index.css';
//import '@react-pdf-viewer/default-layout/lib/styles/index.css';

//React Query Settings
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);
  const { appName } = appInformation;

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{appName}</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <AppContextProvider>
          <Provider store={store}>
            <AppThemeProvider>
              <AppStyleProvider>
                <NextThemesProvider defaultTheme="system" attribute="class" value={{ light: lightTheme.className, dark: darkTheme.className }}>
                  <AppLocaleProvider>

                    {/* <FirebaseAuthProvider>
                      <AuthRoutes>
                        <CssBaseline />
                        <Component {...pageProps} />
                      </AuthRoutes>
                    </FirebaseAuthProvider> */}

                    <JWTAuthProvider>
                      <AuthRoutes>
                        <CssBaseline />
                        <NextUIProvider>
                          <Component {...pageProps} />
                        </NextUIProvider>
                      </AuthRoutes>
                    </JWTAuthProvider>

                  </AppLocaleProvider>
                </NextThemesProvider>
              </AppStyleProvider>
            </AppThemeProvider>
          </Provider>
        </AppContextProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
