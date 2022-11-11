import "./App.scss";

import AppHeader from "../components/AppHeader/AppHeader.jsx";
import AppMain from "../components/AppMain/AppMain";
import GoToTop from "../components/GoToTop/GoToTop";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <AppHeader />
      <AppMain />
      <GoToTop />
    </Fragment>
  );
}

export default App;
