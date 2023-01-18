import { FC } from "react";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";
import type { AppProps } from "next/app";
import { lightTheme } from "@/themes/light-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import "@/styles/Global.css";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
