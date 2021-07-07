/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { wrapper } from "@redux/store";
import { GlobalStyle } from "@lib/globalStyles";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
