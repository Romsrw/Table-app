import Arrow from '../../UI/Arrow';
import './Select.css';
import { useEffect, useRef, useState } from 'react';

const Select = ({ options }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const listRef = useRef();

  useEffect(() => {
    if (isOpenSelect && listRef.current) {
      listRef.current.focus();
    }
  }, [isOpenSelect, listRef]);

  return (
    <div className='selectWrapper'>
      <button onClick={() => setIsOpenSelect((prev) => !prev)}>
        <Arrow />
      </button>
      {isOpenSelect && (
        <div
          className='select'
          ref={listRef}
          tabIndex={0}
          onBlur={() => setIsOpenSelect(false)}
        >
          <div className='select__options'>
            {options.map((option) => (
              <div className='select__option'>{option}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Select;
