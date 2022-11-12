import "./GoToTop.scss";
import React, { useEffect, useState } from "react";

//ToDo : class Component 활용.
// class GoToTop extends React.Component {
//   //?  스크롤 이벤트에 연결된 핸들러가 실행될 때 마다 비교되어야 할 스크롤 위치는 외부로부터 전달 받도록 설정하되, 기본 값을 설정
//   //? 함수형 컴포넌트의 경우 Component.defaultProps로 설정해야 합니다.
//   // scroll의 높이가 100보다 커지면 상태 변경
//   static defaultProps = {
//     changeModePosition: 100,
//   };

//   state = {
//     isShow: false,
//   };

//   handleDetectScrollPosition = () => {
//     if (window.scrollY > this.props.changeModePosition) {
//       this.setState({
//         isShow: true,
//       });
//     } else {
//       this.setState({
//         isShow: false,
//       });
//     }
//   };

//   handleGoToTop = () => {
//     const html = document.documentElement;

//     // scrollIntoView : 페이지 최상단으로 이동
//     //{ behavior: "smooth" } : 부드럽게 페이지 상단 이동
//     html.scrollIntoView({ behavior: "smooth" });
//   };

//   //? 스크롤 감지 이벤트는 글로벌 객체인 window에 설정해야 하므로 componentDidMount 라이프 사이클 훅을 사용해야 합니다.
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleDetectScrollPosition);
//   }

//   //? 컴포넌트가 언마운트(unmount) 되면?
//   //? 더 이상 스크롤 이벤트를 감지할 필요가 없어지므로 componentWillUnmount 라이프 사이클 훅을 사용해 연결된 이벤트를 제거해야 합니다.
//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleDetectScrollPosition);
//   }

//   //* ----------------------------------------------------------------------------------------------------------------------

//   render() {
//     return (
//       <button
//         type="button"
//         className={`resetButton GoToTop ${
//           this.state.isShow ? "is-show" : ""
//         }`.trim()}
//         aria-label="페이지 상단으로 이동"
//         onClick={this.handleGoToTop}
//       >
//         <svg
//           viewBox="0 0 64 64"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//         >
//           <path d="m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z" />
//         </svg>
//       </button>
//     );
//   }
// }
//.

//ToDo : function Component 활용.

// GoToTop함수 내에 있을 경우 component가 변경 될때마다 계속 실행되므로 밖으로 빼서 사용하는것이 좋다.
function handleGoToTop() {
  document.documentElement.scrollIntoView({ behavior: "smooth" });
}

const GoToTop = ({ changeModePosition }) => {
  const [show, setShow] = useState(false);

  //? 함수형 컴포넌트에서 성능 저하 문제를 해결하기 위한 방법으로 메모이제이션(Memoization, '메모 된') 콜백 함수를 사용할 때 사용합니다.
  //? 메모이제이션 된 콜백 함수는 콜백의 의존성이 변경되었을 때만 변경됩니다. 불필요한 렌더링을 방지하기 위한 목적으로 사용됩니다.
  useEffect(() => {
    //changeModePosition이 변경될때만 실행
    // console.log("change Render");

    //scroll이 움직이면 버튼 띄우는 함수
    function handleScrollDetection() {
      window.scrollY > changeModePosition ? setShow(true) : setShow(false);
    }

    window.addEventListener("scroll", handleScrollDetection);

    return () => {
      window.removeEventListener("scroll", handleScrollDetection);
    };

    //? 메모이제이션 콜백 함수 : 의존성 배열이 추가된 경우, 의존하는 상태 또는 데이터가 변경되었을 때만 업데이트 => []
  }, [changeModePosition]);

  //* ----------------------------------------------------------------------------------------------------------------------

  return (
    <button
      type="button"
      className={`resetButton GoToTop ${show ? "is-show" : ""}`.trim()}
      aria-label="페이지 상단으로 이동"
      onClick={handleGoToTop}
    >
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z" />
      </svg>
    </button>
  );
};

// 초기값 설정.
GoToTop.defaultProps = {
  changeModePosition: 100,
};

export default GoToTop;
