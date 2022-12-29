import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
}

export default MyApp;
