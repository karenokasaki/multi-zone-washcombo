import "../styles/globals.scss";

import "../styles/LG/lg-default.css";
import "../styles/LG/bootstrap.css";
import "../styles/LG/bootstrap-grid.css";
import "../styles/LG/variables.scss";
import "../styles/LG/navigation.scss";
import "../styles/LG/components.css";
import "../styles/LG/hsad-style.css";

import "../styles/SJ/slider.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
