import React, { useState } from "react";
import Drawing from "./components/Drawing";
import ColorSelector from "./components/ColorSelector";
import "./App.css";
import {
  assignColorsToParts,
  findBaseAssignment,
  getColors,
  getParts,
  getLang,
} from "./Utils";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const App = () => {
  const { width, height } = useWindowSize();
  const parts = getParts();
  const baseColors = getColors(getLang());
  const [selectedPart, setSelectedPart] = useState(null);
  const [baseAssignments] = useState(assignColorsToParts(baseColors, parts));
  const [assignments, setAssignments] = useState({});

  const selectColor = (color) => {
    if (selectedPart !== null) {
      const baseAssignment = findBaseAssignment(selectedPart, baseAssignments);
      if (color.hex === baseAssignment.color.hex) {
        setAssignments({ ...assignments, [selectedPart]: color });
        setSelectedPart(null);
      } else {
        const el = document.getElementById("baby-container");

        el.classList.remove("hidden");
        el.classList.add("active");
        setTimeout(() => {
          el.classList.remove("active");
          el.classList.add("hidden");
        }, 2000);
      }
    }
  };

  const selectPart = (partId) => {
    selectedPart === partId ? setSelectedPart(null) : setSelectedPart(partId);
  };

  return (
    <div className="app">
      <div className="lang-picker">
        <a href="?lang=en">🇬🇧</a> / <a href="?lang=it">🇮🇹</a>
      </div>
      <div className="container box">
        <div className="box__line box__line--top"></div>
        <div className="box__line box__line--right"></div>
        <div className="box__line box__line--bottom"></div>
        <div className="box__line box__line--left"></div>
        <div className="left-panel">
          <Drawing
            selectedPart={selectedPart}
            selectPart={selectPart}
            baseAssignments={baseAssignments}
            assignments={assignments}
          />
        </div>
        <div className="right-panel">
          <ColorSelector selectColor={selectColor} />
        </div>
        <div className="baby-container" id="baby-container">
          <div className="circle">
            <div className="drops"></div>
            <div className="drops"></div>
            <div className="hand"></div>
            <div className="hand rgt"></div>
            <div className="holder">
              <div className="bob">
                <div className="nose"></div>
                <div className="face">
                  <div className="mouth">
                    <div className="tongue"></div>
                  </div>
                </div>
                <div className="ear"></div>
                <div className="ear rgt"></div>
                <div className="neck"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Object.keys(assignments).length === baseAssignments.length && (
        <Confetti width={width} height={height} />
      )}
    </div>
  );
};

export default App;
