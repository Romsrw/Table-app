import Arrow from "../../UI/Arrow";
import "./Select.css";
import { useState } from "react";

const Select = ({ options }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  return (
    <div className="selectWrapper">
      <button onClick={() => setIsOpenSelect((prev) => !prev)}>
        <Arrow />
      </button>
      {isOpenSelect && (
        <div className="select">
          <div className="select__option">
            {options.map((option) => (
              <div>{option}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Select;
