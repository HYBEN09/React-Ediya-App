import AppButton from "components/AppButton/AppButton";
import EdiyaContext from "context/ediyaContext";
import { Fragment, Component } from "react";
import "./AppNavigation.scss";

class AppNavigation extends Component {
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
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
          <AppButton
            className="is-close-menu"
            label="메뉴 닫기"
            onClick={this.handleCloseMenu}
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
