import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}

export default ScrollTop;
