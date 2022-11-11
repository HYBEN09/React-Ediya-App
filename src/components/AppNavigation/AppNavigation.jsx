import { Fragment } from "react";
import "./AppNavigation.scss";

const AppNavigation = () => {
  return (
    <Fragment>
      <button
        className="resetButton is-open-menu"
        type="button"
        title="메뉴 열기"
        aria-label="메뉴 열기"
      >
        <span className="ir"></span>
      </button>

      <nav className="appNavigation" hidden>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        <ul className="resetList">
          <li>
            <a href="#menu">메뉴</a>
          </li>
          <li>
            <a href="#members">이디야멤버스</a>
          </li>
          <li>
            <a href="#coffee-lab">이디야커피랩</a>
          </li>
          <li>
            <a href="#culture-lab">이디야컬쳐랩</a>
          </li>
          <li>
            <a href="#notice">공지사항</a>
          </li>
          <li>
            <a href="#find-store">매장찾기</a>
          </li>
        </ul>
        <button
          className="button is-close-menu"
          type="button"
          title="메뉴 닫기"
          aria-label="메뉴 닫기"
        >
          <span className="close" aria-hidden="true">
            ×
          </span>
        </button>
      </nav>
    </Fragment>
  );
};
export default AppNavigation;
