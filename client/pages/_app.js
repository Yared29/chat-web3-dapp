import { ChatDappProvider } from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChatDappProvider>
      <Component {...pageProps} />
    </ChatDappProvider>
  );
}

export default MyApp;
