import { Fragment, Component } from "react";
import "./AppNavigation.scss";

class AppNavigation extends Component {
  state = {
    isOpen: false,
    classes: "appNavigation",
  };

  handleOpenMenu = (e) => {
    this.setState(
      {
        isOpen: true,
      },
      () => {
        window.setTimeout(() => {
          this.setState({
            classes: "appNavigation is-active",
          });
        }, 100);
      }
    );
  };

  handleCloseMenu = (e) => {
    this.setState(
      {
        classes: "appNavigation",
      },
      () => {
        window.setTimeout(() => {
          this.setState({
            isOpen: false,
          });
        }, 300);
      }
    );
  };

  render() {
    return (
      <Fragment>
        <button
          className="resetButton is-open-menu"
          type="button"
          title="메뉴 열기"
          aria-label="메뉴 열기"
          onClick={this.handleOpenMenu}
        >
          <span className="ir"></span>
        </button>

        <nav className={this.state.classes} hidden={!this.state.isOpen}>
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
            className="resetButton is-close-menu"
            type="button"
            title="메뉴 닫기"
            aria-label="메뉴 닫기"
            onClick={this.handleCloseMenu}
          >
            <span className="close" aria-hidden="true">
              ×
            </span>
          </button>
        </nav>
      </Fragment>
    );
  }
}

export default AppNavigation;
