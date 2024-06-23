import React from "react";
import ColorPopover from "./ColorPopover";
import { findBaseAssignment } from "../Utils";

const Drawing = ({
  selectedPart,
  selectPart,
  baseAssignments,
  assignments,
}) => {
  return (
    <div className="drawing">
      <div className="bg">
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="planets">
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
        </div>
      </div>
      <div className="unicorn-container">
        <div className="unicorn">
          <div className="header">
            <ColorPopover
              show={selectedPart === 1}
              onClose={() => {
                selectPart(null);
              }}
              label={findBaseAssignment(1, baseAssignments)?.color.name}
            >
              <div
                className="horn"
                onClick={() => {
                  selectPart(1);
                }}
              >
                <label className="part part-1">{!assignments[1] && 1}</label>
                <div
                  style={
                    assignments[1]
                      ? {
                          backgroundColor: assignments[1].hex,
                        }
                      : {}
                  }
                  className="lines-container"
                ></div>
              </div>
            </ColorPopover>
            <div className="head">
              <div className="face">
                <div
                  className="pink"
                  style={
                    assignments[2]
                      ? {
                          backgroundColor: assignments[2].hex,
                        }
                      : {}
                  }
                >
                  <ColorPopover
                    show={selectedPart === 2}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(2, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(2);
                      }}
                      className="part part-2"
                    >
                      {!assignments[2] && 2}
                    </label>
                  </ColorPopover>
                  <div className="nose">
                    <div
                      style={
                        assignments[3]
                          ? {
                              backgroundColor: assignments[3].hex,
                            }
                          : {}
                      }
                      className="hole-left"
                    ></div>
                    <div
                      style={
                        assignments[3]
                          ? {
                              backgroundColor: assignments[3].hex,
                            }
                          : {}
                      }
                      className="hole-right"
                    ></div>
                  </div>
                  <ColorPopover
                    show={selectedPart === 3}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(3, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(3);
                      }}
                      className="part part-3"
                    >
                      {!assignments[3] && 3}
                    </label>
                  </ColorPopover>
                  <div
                    style={
                      assignments[3]
                        ? {
                            backgroundColor: assignments[3].hex,
                          }
                        : {}
                    }
                    className="mouth"
                  ></div>
                </div>

                <div className="white">
                  <ColorPopover
                    show={selectedPart === 4}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(4, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(4);
                      }}
                      className="part part-4"
                    >
                      {!assignments[4] && 4}
                    </label>
                  </ColorPopover>
                  <div
                    style={
                      assignments[4]
                        ? {
                            backgroundColor: assignments[4].hex,
                          }
                        : {}
                    }
                    className="ear"
                  ></div>
                </div>
              </div>
              <div className="hair">
                <div
                  style={
                    assignments[5]
                      ? {
                          backgroundColor: assignments[5].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                >
                  <ColorPopover
                    show={selectedPart === 5}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(5, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(5);
                      }}
                      className="part part-5"
                    >
                      {!assignments[5] && 5}
                    </label>
                  </ColorPopover>
                </div>
                <div
                  style={
                    assignments[6]
                      ? {
                          backgroundColor: assignments[6].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                >
                  <ColorPopover
                    show={selectedPart === 6}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(6, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(6);
                      }}
                      className="part part-6"
                    >
                      {!assignments[6] && 6}
                    </label>
                  </ColorPopover>
                  <div className="circle-shadow"></div>
                </div>
                <div
                  style={
                    assignments[7]
                      ? {
                          backgroundColor: assignments[7].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                >
                  <ColorPopover
                    show={selectedPart === 7}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(7, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(7);
                      }}
                      className="part part-7"
                    >
                      {!assignments[7] && 7}
                    </label>
                  </ColorPopover>
                </div>
                <div
                  style={
                    assignments[8]
                      ? {
                          backgroundColor: assignments[8].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                >
                  <ColorPopover
                    show={selectedPart === 8}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(8, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(8);
                      }}
                      className="part part-8"
                    >
                      {!assignments[8] && 8}
                    </label>
                  </ColorPopover>
                  <div className="circle-shadow"></div>
                </div>
                <div
                  style={
                    assignments[9]
                      ? {
                          backgroundColor: assignments[9].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                >
                  <ColorPopover
                    show={selectedPart === 9}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(9, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(9);
                      }}
                      className="part part-9"
                    >
                      {!assignments[9] && 9}
                    </label>
                  </ColorPopover>
                </div>
                <div
                  style={
                    assignments[10]
                      ? {
                          backgroundColor: assignments[10].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                >
                  <ColorPopover
                    show={selectedPart === 10}
                    onClose={() => {
                      selectPart(null);
                    }}
                    label={findBaseAssignment(10, baseAssignments)?.color.name}
                  >
                    <label
                      onClick={() => {
                        selectPart(10);
                      }}
                      className="part part-10"
                    >
                      {!assignments[10] && 10}
                    </label>
                  </ColorPopover>
                  <div className="circle-shadow"></div>
                </div>
                <div
                  style={
                    assignments[5]
                      ? {
                          backgroundColor: assignments[5].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                ></div>
                <div
                  style={
                    assignments[6]
                      ? {
                          backgroundColor: assignments[6].hex,
                        }
                      : {}
                  }
                  className="inner-hair"
                >
                  <div className="circle-shadow"></div>
                </div>
              </div>
            </div>
            <div className="neck"></div>
          </div>
          <div className="body">
            <div className="main"></div>
            <div className="tail">
              <div className="inner-tail"></div>
              <div className="inner-tail"></div>
              <div className="inner-tail"></div>
              <div className="inner-tail"></div>
              <div className="inner-tail"></div>
            </div>
          </div>
          <div className="legs">
            <div className="leg"></div>
            <div className="leg"></div>
            <div className="leg"></div>
            <div className="leg"></div>
          </div>
        </div>
      </div>
      <div className="rainbow-container">
        <div className="rainbow"></div>
      </div>
    </div>
  );
};

export default Drawing;
