import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store";
import "../styles/globals.css";
import { loadState, saveState } from "../lib/persist";
import { setState } from "../state/gameSlice";

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

  useEffect(() => {
    const state = loadState();

    // Load the persisted state only if this game has the same solution
    if (state && state.solution === store.getState().game.solution) {
      store.dispatch(setState(state));
    }

    // Persist the state to localStorage whenever it changes
    const unsubscribe = store.subscribe(() => {
      saveState(store.getState().game);
    });

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
