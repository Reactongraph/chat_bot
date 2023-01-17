// import '@/styles/globals.css'
import { wrapper } from "@/redux/store";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme } from "@/themes/light-theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
