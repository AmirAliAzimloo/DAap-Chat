import "../styles/globals.css";
import "../styles/style.scss";
import { ChatProvider } from "../context/ChatContext";
import { SocketProvider } from "../providers/socket-provider";

function MyApp({ Component, pageProps }) {


  return (
    <SocketProvider>
    <ChatProvider>
      <Component {...pageProps} />
    </ChatProvider>
    </SocketProvider>
  );
}

export default MyApp;
