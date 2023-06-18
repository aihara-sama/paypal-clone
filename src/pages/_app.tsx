/* eslint-disable import/no-absolute-path */
import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { GlobalStyles as MuiGlobalStyles } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Auth from "components/auth/Auth";
import { Meta } from "components/common/Meta";
import { Toaster } from "components/common/Toaster";
import { ThemeProvider } from "contexts/theme";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import nProgress from "nprogress";
import { Provider, useSelector } from "react-redux";
import type { ApplicationState } from "store";
import { store } from "store";
import createEmotionCache from "utils/createEmotionCache";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const GlobalStyles = () => {
  const { preventScroll } = useSelector((state: ApplicationState) => state.app);

  return (
    <MuiGlobalStyles
      styles={{
        body: {
          overflow: preventScroll ? "hidden" : "auto",
        },
      }}
    />
  );
};

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Home - PayPal</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Meta />
      <Provider store={store}>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <GlobalStyles />
            <CssBaseline />
            <Toaster />
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
