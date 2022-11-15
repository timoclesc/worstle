import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store";
import "../styles/globals.css";

function resize() {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
