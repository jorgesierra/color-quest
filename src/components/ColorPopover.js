import React from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";

const ColorPopover = ({ children, show, onClose, label }) => {
  return (
    <Popover
      isOpen={show}
      positions={["top"]} // preferred positions by priority
      padding="5"
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"magenta"}
          arrowSize={10}
          arrowStyle={{ opacity: 0.7 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div className="color-to-pick" onClick={onClose}>
            {label}
          </div>
        </ArrowContainer>
      )}
      // onClickOutside={onClose}
    >
      {children}
    </Popover>
  );
};

export default ColorPopover;
