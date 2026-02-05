import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ behavior = "auto" }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure scroll restoration is manual so SPA navigation doesn't restore previous position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;
