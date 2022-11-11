/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./BeverageItem.scss";

const BeverageItem = ({ item }) => {
  console.log(item);
  return (
    <li className="beverageList__item">
      <a
        href="#"
        role="button"
        aria-haspopup="true"
        aria-pressed="false"
        className="beverageList__button"
      >
        <figure>
          <img
            src="https://yamoo9.github.io/assets/images/ediya/iced-cherry-blossoms-latte.png"
            width="323"
            height="323"
            alt=""
          />
          <figcaption>ICED 벚꽃라떼</figcaption>
        </figure>
      </a>
      <div
        className="beverageList__dialog"
        hidden
        role="dialog"
        aria-modal="false"
        aria-labelledby="ediya-menu__item-1"
      >
        <h3 className="beverageList__dialog--name" id="ediya-menu__item-1">
          ICED 벚꽃라떼<span lang="en">Cherry Blossom Latte</span>
        </h3>
        <div className="beverageList__dialog--multiColumn is-2">
          <dl>
            <dt>칼로리</dt>
            <dd>(393kcal)</dd>
            <dt>당류</dt>
            <dd>(35g)</dd>
            <dt>단백질</dt>
            <dd>(7g)</dd>
            <dt>포화지방</dt>
            <dd>(18.6g)</dd>
            <dt>나트륨</dt>
            <dd>(149mg)</dd>
            <dt>카페인</dt>
            <dd>(0mg)</dd>
          </dl>
        </div>
        <button
          className="button is-close-dialog"
          type="button"
          title="닫기"
          aria-label="음료 정보 패널 닫기"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </li>
  );
};

export default BeverageItem;
