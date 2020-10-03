import "../styles/index.css";
import { GlobalStyles } from "twin.macro";
import "../styles/ck-style.css";
import "../styles/adminStyles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
