import classNames from "classnames";
import React, { forwardRef } from "react";

//? React.forwardRef API를 사용하여 <AppNavigation/> 컴포넌트에 대한 refs를 명시적으로 전달할 수 있습니다.
//? React.forwardRef는 props와 ref 파라미터를 받아 React 노드를 반환하는 렌더링 함수를 받습니다.
// ref문서 : https://ko.reactjs.org/docs/forwarding-refs.html

const AppButton = ({ children, className, label, ...restProps }, ref) => {
  const combineClassNames = classNames(["resetButton", className]);
  return (
    <button
      ref={ref}
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

//? forwardRef 명시적으로 이름 설정
AppButton.displayName = "CommonButton";

export default forwardRef(AppButton);
