import BeverageItem from "../BeverageItem/BeverageItem";
import React from "react";
import "./BeverageList.scss";
import EdiyaContext from "../../context/ediyaContext";

//* ------------------------------------------------------------------------------------------------------------
//? 함수 문법

// const BeverageList = () => {
//   return (
//     <ul className="	beverageList resetList">
//       <EdiyaContext.Consumer>
//         {({ beverage_menu: items }) =>
//           items.map((item) => <BeverageItem key={item.id} item={item} />)
//         }
//       </EdiyaContext.Consumer>
//     </ul>
//   );
// };

//* ------------------------------------------------------------------------------------------------------------

//? class 문법
class BeverageList extends React.Component {
  static contextType = EdiyaContext;

  render() {
    const { beverage_menu: items } = this.context;

    return (
      <ul className="	beverageList resetList">
        {items.map((item) => (
          <BeverageItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

export default BeverageList;
