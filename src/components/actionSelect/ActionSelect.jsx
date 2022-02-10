import React from 'react';
import CrossIcon from './../../UI/CrossIcon';
import Select from './Select';
import './ActionSelect.css';

const ActionSelect = ({
  isVisibleType,
  setIsVisibleType,
  selectOptions,
  removeGroup,
}) => {
  return (
    <div className='action'>
      <button
        onClick={() =>
          setIsVisibleType((prev) => (prev === 'cross' ? '' : 'cross'))
        }
      >
        <CrossIcon />
      </button>
      {isVisibleType === 'cross' && (
        <Select removeGroup={removeGroup} options={selectOptions} />
      )}
    </div>
  );
};

export default ActionSelect;
