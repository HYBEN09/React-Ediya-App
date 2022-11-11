/* eslint-disable jsx-a11y/anchor-is-valid */
import BeverageItem from "components/BeverageItem/BeverageItem";
import React from "react";
import "./BeverageList.scss";

const BeverageList = () => {
  return (
    <ul className="	beverageList resetList">
      <BeverageItem />
    </ul>
  );
};

export default BeverageList;
