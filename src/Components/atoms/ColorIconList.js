import React from "react";

const ColorIconList = ({ rgbColors = [] }) => {
  let coloursToDisplay = rgbColors;
  let remainingColor = 0;
  if (rgbColors.length > 4) {
    coloursToDisplay = rgbColors.slice(0, 4);
    remainingColor = Math.abs(4 - rgbColors.length);
  }
  return (
    <>
      {coloursToDisplay.map((color) => {
        return (
          <span
            className={`w-3 h-3 mr-1 inline-block rounded-full`}
            style={{ backgroundColor: color }}
          />
          // <a href="bgColor" className={bgColor}>
          //   {bgColor}
          // </a>
        );
      })}
      {remainingColor ? <span class="ml-1">+{remainingColor}</span> : <></>}
    </>
  );
};

export default ColorIconList;
