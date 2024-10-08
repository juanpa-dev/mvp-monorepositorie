import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@repo/ui/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
