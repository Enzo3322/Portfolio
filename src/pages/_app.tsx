import Header from "@/components/Header";
import { LangContextProvider } from "@/context/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangContextProvider>
      <div className="bg-gray-100">
        <Header />
        <Component {...pageProps} />
      </div>
    </LangContextProvider>
  );
}
