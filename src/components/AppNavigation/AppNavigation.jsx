import AppButton from "components/AppButton/AppButton";
import EdiyaContext from "../../context/ediyaContext.js";
import { Fragment, Component, createRef } from "react";
import "./AppNavigation.scss";

class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.refs = createRef();
  }

  //------------------------------------------------------------------------------------------------------

  static contextType = EdiyaContext;

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

  handleFocusCloseMenuButton = (e) => {
    //keyCode: 9 => tabKey
    // 처음 메뉴탭에서 shift + Tab 눌렀다면 closeButton으로 이동.
    if (e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      this.refs.closeButton.focus();
    }
  };

  handleFocusFirstLink = (e) => {
    // closeButton에서 Tab키를 눌렀을때 메뉴로 이동
    if (!e.shiftKey && e.keyCode === 9) {
      e.preventDefault();
      this.refs.firstLink.focus();
    }
  };

  // ? 렌더링된 다음 접근 위해
  // componentDidMount() {
  //   console.log(this.refs);
  // }

  handleEscCloseMenu = (e) => {
    console.log("keydown");
    // Esc 키를 눌렀을때 창 닫기. (Esc = keycode:27)
    if (e.keyCode === 27) {
      this.handleCloseMenu();
    }
  };

  shouldComponentUpdate(nextProps, { isOpen }) {
    const methodName = isOpen ? "addEventListener" : "removeEventListener";

    // event를 추가 or 제거 (Tab키를 누르다가 Esc키를 누르고 다시 Tab키를 눌렀을때 'keydown'이 더 이상 연결되지않음)
    window[methodName]("keydown", this.handleEscCloseMenu);

    return true;
  }

  //------------------------------------------------------------------------------------------------------

  render() {
    const {
      navigation: { title, items },
    } = this.context;

    return (
      <Fragment>
        <AppButton
          className="is-open-menu"
          label="메뉴 열기"
          onClick={this.handleOpenMenu}
        >
          <span className="ir"></span>
        </AppButton>

        <nav className={this.state.classes} hidden={!this.state.isOpen}>
          <h2 className="a11y-hidden">{title}</h2>
          <ul className="resetList">
            {items.map(({ link, text }, index) => (
              <li key={`${link}-${index}`}>
                <a
                  ref={index === 0 ? "firstLink" : null}
                  href={link}
                  onKeyDown={
                    // index가 첫번째가 되면 handleFocusCloseMenuButton을 실행하고 아니면 null
                    index === 0 ? this.handleFocusCloseMenuButton : null
                  }
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <AppButton
            ref="closeButton"
            className="is-close-menu"
            label="메뉴 닫기"
            onClick={this.handleCloseMenu}
            onKeyDown={this.handleFocusFirstLink}
          >
            <span className="close" aria-hidden="true">
              x
            </span>
          </AppButton>
        </nav>
      </Fragment>
    );
  }
}

export default AppNavigation;
