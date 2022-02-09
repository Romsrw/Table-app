import React from "react";
import CrossIcon from "./../../UI/CrossIcon";
import Select from "./Select";

const ActionSelect = ({
  isVisibleType,
  setIsVisibleType,
  selectOptions,
  removeGroup,
}) => {
  return (
    <div className="action">
      <button
        onClick={() =>
          setIsVisibleType((prev) => (prev === "cross" ? "" : "cross"))
        }
      >
        <CrossIcon />
      </button>
      {isVisibleType === "cross" && <Select options={selectOptions} />}
    </div>
  );
};

export default ActionSelect;
