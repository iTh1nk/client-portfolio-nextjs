import "../styles/index.css";
import { GlobalStyles } from "twin.macro";
import "./ck-style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
