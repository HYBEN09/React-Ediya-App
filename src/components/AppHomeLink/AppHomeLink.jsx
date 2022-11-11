/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./AppHomeLink.scss";
import { string } from "prop-types";

const AppHomeLink = ({ external, children, ...domProps }) => {
  return (
    <h1 className="appHeader__brand">
      <a
        className="appHeader__homeLink"
        {...domProps}
        target={external ? "_blank" : null}
        rel={external ? "noopener noreferrer" : null}
      >
        {/* AppHeader에  span요소가 없을때 기본값을 적용 */}
        {children || <span className="a11yHidden">홈 링크</span>}
      </a>
    </h1>
  );
};

AppHomeLink.protoTypes = {
  href: string.isRequired,
};

export default AppHomeLink;
