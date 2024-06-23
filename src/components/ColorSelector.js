import React from "react";

import { getColors, getLang } from "../Utils";

const ColorSelector = ({ selectColor }) => {
  const lang = getLang();
  const colors = getColors(lang);

  return (
    <div className="color-selector">
      {colors.map((color) => (
        <div
          key={color.hex}
          className="color-box"
          style={{ backgroundColor: color.hex }}
          onClick={() => selectColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
