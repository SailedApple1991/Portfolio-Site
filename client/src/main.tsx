import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// GitHub Pages SPA URL parameter handling
(function() {
  var l = window.location;
  if (l.search) {
    var q = {};
    l.search.slice(1).split('&').forEach(function(v) {
      var a = v.split('=');
      q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    if (q.p !== undefined) {
      window.history.replaceState(null, '', 
        l.pathname.slice(0, -1) + 
        (q.p || '') + 
        (q.q ? ('?' + q.q) : '') + 
        l.hash
      );
    }
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
