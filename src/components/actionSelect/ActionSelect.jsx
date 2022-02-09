import React from "react";
import CrossIcon from "./../../UI/CrossIcon";

const ActionSelect = ({ isVisibleType, setIsVisibleType }) => {
  return (
    <div className="action">
      {isVisibleType === "cross" && <select></select>}
      <button
        onClick={() =>
          setIsVisibleType((prev) => (prev === "cross" ? "" : "cross"))
        }
      >
        <CrossIcon />
      </button>
    </div>
  );
};

export default ActionSelect;
