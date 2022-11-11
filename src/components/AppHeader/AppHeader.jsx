import "./AppHeader.scss";
import React from "react";
import AppHomeLink from "components/AppHomeLink/AppHomeLink";
import AppNavigation from "components/AppNavigation/AppNavigation";

const AppHeader = () => {
  return (
    <header className="appHeader">
      <AppHomeLink
        wrapperProps={{
          as: "div",
          className: "wrapper",
          title: "래퍼",
        }}
        className="testClass"
        href="/"
        title="이디야 커피 홈"
        external
      >
        <span className="a11yHidden" lang="en">
          EDIYA COFFEE
        </span>
      </AppHomeLink>

      <AppNavigation />
    </header>
  );
};

export default AppHeader;
