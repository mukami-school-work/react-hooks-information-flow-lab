import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChangeColor() {
    if (isDarkMode === false) {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }
  }
  // const appClass = () => {
  //    return isDarkMode ? "dark" : "light"
  // }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleChangeColor}/>
      <ShoppingList items={itemData} />
    </div>
  )
}

export default App;
