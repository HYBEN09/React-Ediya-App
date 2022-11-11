import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import * as ReactDOM from "react-dom/client";
import "./styles/index.scss";

import App from "./app/App";
import EdiyaContext, { ediyaData } from "./context/ediyaContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EdiyaContext.Provider value={ediyaData}>
    <App />
  </EdiyaContext.Provider>
);

if (process.env.NODE_ENV === "production") {
  import("~/config/serviceWorker")
    .then((serviceWorker) => serviceWorker.register)
    .catch((error) => console.error(error.message));
}
