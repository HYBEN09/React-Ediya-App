/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import "./BeverageItem.scss";

const BeverageItem = ({
  item: {
    id,
    detail: { desc, display_criteria: criteria, en, ko },
    figure: { width, height, name, src },
  },
}) => {
  //? Hook 사용
  //눌린 상태 (pressed)
  const [pressed, setPressed] = useState(false);

  const [dialogClassName, setDialogClassName] = useState(
    "beverageList__dialog"
  );

  const uniqueId = `ediya-menu__item-${id}`;

  //* ----------------------------------------------------------------------------------------------

  //? 성분 상세 정보 창 열기
  function handleShowDialog(e) {
    e.preventDefault();
    setPressed(true);
    window.setTimeout(() => {
      setDialogClassName("beverageList__dialog is-active");
    }, 100);
  }

  //? 성분 상세 정보 창 닫기
  function handleHideDialog() {
    setDialogClassName("beverageList__dialog");
    setPressed(true);
    window.setTimeout(() => {
      setPressed(false);
    }, 400);
  }

  //* ----------------------------------------------------------------------------------------------

  return (
    <li className="beverageList__item">
      <a
        href="#"
        role="button"
        aria-haspopup="true"
        aria-pressed={pressed}
        className="beverageList__button"
        onClick={handleShowDialog}
      >
        <figure>
          <img src={src} width={width} height={height} alt="" />
          <figcaption>{name}</figcaption>
        </figure>
      </a>
      <div
        className={dialogClassName}
        hidden={!pressed}
        role="dialog"
        aria-modal="false"
        aria-labelledby={uniqueId}
      >
        <h3 className="beverageList__dialog--name" id="ediya-menu__item-1">
          {ko}
          <span lang="en">{en}</span>
        </h3>
        <p>{desc}</p>
        <div className="beverageList__dialog--multiColumn is-2">
          <dl>
            {criteria.map(([dt, dd], index) => (
              <Fragment key={index}>
                <dt>{dt}</dt>
                <dd>{dd}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
        <button
          className="button is-close-dialog"
          type="button"
          title="닫기"
          aria-label="음료 정보 패널 닫기"
          onClick={handleHideDialog}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </li>
  );
};

export default BeverageItem;
