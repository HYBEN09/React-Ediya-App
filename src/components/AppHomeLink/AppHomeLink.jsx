import React from "react";
import "./AppHomeLink.scss";
import classNames from "classnames";
import { string } from "prop-types";

const AppHomeLink = ({
  wrapperProps: {
    as: WrapperComponent,
    className: wrapperClassName,
    ...restWrapperProps
  },
  external,
  children,
  className,
  ...domProps
}) => {
  // ----------------------------------------------------------------------------------------
  //? <AppHomeLink/> className과 <AppHeader/> className 병합
  // const combineClassNames = ["appHeader__homeLink", className || ""]
  //   .join(" ")
  //   .trim();

  // ----------------------------------------------------------------------------------------
  //? classNames 라이브러리 사용
  const combineClassNames = classNames("appHeader__link", className);
  const combineWrapperClassNames = classNames(
    "appHeader__brand",
    wrapperClassName || ""
  );

  return (
    // WrapperComponent 사용 -> h1 => <AppHeader/> wrapperProps 속성의 as에 설정한 요소로 바꿈
    <WrapperComponent
      {...restWrapperProps}
      className={combineWrapperClassNames}
    >
      <a
        {...domProps}
        className={combineClassNames}
        target={external ? "_blank" : null}
        rel={external ? "noopener noreferrer" : null}
      >
        {/* AppHeader에  span요소가 없을때 기본값을 적용 */}
        {children || <span className="a11yHidden">홈 링크</span>}
      </a>
    </WrapperComponent>
  );
};

AppHomeLink.protoTypes = {
  href: string.isRequired,
};

// <AppHeader/> wrapperProps속성의 기본값
AppHomeLink.defaultProps = {
  wrapperProps: {
    as: "h1",
  },
};

export default AppHomeLink;
