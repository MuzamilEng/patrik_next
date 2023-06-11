import '@/styles/globals.css'
import { useEffect, useState } from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  );
}

export default MyApp;
