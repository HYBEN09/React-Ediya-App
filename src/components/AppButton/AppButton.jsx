import classNames from "classnames";
import React from "react";

const AppButton = ({ children, className, label, ...restProps }) => {
  const combineClassNames = classNames(["resetButton", className]);
  return (
    <button
      className={combineClassNames}
      type="button"
      {...restProps}
      title={label || null}
      aria-label={label || null}
    >
      {children}
    </button>
  );
};

export default AppButton;
