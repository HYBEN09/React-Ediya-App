import "./GoToTop.scss";
import React from "react";

class GoToTop extends React.Component {
  //?  스크롤 이벤트에 연결된 핸들러가 실행될 때 마다 비교되어야 할 스크롤 위치는 외부로부터 전달 받도록 설정하되, 기본 값을 설정
  //? 함수형 컴포넌트의 경우 Component.defualtProps로 설정해야 합니다.
  // scroll의 높이가 100보다 커지면 상태 변경
  static defaultProps = {
    changeModePosition: 100,
  };

  state = {
    isShow: false,
  };

  handleDetectScrollPosition = () => {
    if (window.scrollY > this.props.changeModePosition) {
      this.setState({
        isShow: true,
      });
    } else {
      this.setState({
        isShow: false,
      });
    }
  };

  handleGoToTop = () => {
    const html = document.documentElement;

    // scrollIntoView : 페이지 최상단으로 이동
    //{ behavior: "smooth" } : 부드럽게 페이지 상단 이동
    html.scrollIntoView({ behavior: "smooth" });
  };

  //? 스크롤 감지 이벤트는 글로벌 객체인 window에 설정해야 하므로 componentDidMount 라이프 사이클 훅을 사용해야 합니다.
  componentDidMount() {
    window.addEventListener("scroll", this.handleDetectScrollPosition);
  }

  //? 컴포넌트가 언마운트(unmount) 되면?
  //? 더 이상 스크롤 이벤트를 감지할 필요가 없어지므로 componentWillUnmount 라이프 사이클 훅을 사용해 연결된 이벤트를 제거해야 합니다.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleDetectScrollPosition);
  }

  //* ----------------------------------------------------------------------------------------------------------------------

  render() {
    return (
      <button
        type="button"
        className={`resetButton GoToTop ${
          this.state.isShow ? "is-show" : ""
        }`.trim()}
        aria-label="페이지 상단으로 이동"
        onClick={this.handleGoToTop}
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
  }
}

export default GoToTop;
