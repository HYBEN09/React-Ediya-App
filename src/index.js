import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import * as ReactDOM from "react-dom/client";
import "./styles/index.scss";

import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

if (process.env.NODE_ENV === "production") {
  import("~/config/serviceWorker")
    .then((serviceWorker) => serviceWorker.register)
    .catch((error) => console.error(error.message));
}
