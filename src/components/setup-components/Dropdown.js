import React, { useState, useEffect, useContext } from 'react';

import Context from '../../context';

const Dropdown = ({ ID, selectedSpaceships, setSelectedSpaceships }) => {
  const { nameList } = useContext(Context);

  const DEFAULT_VALUE = nameList[0];
  const [value, setValue] = useState(DEFAULT_VALUE);

  let tempObj = Object.assign(selectedSpaceships, selectedSpaceships);

  useEffect(() => {
    tempObj[ID] = value;
    setSelectedSpaceships(Object.assign({}, tempObj));
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <select
      className="dropdown"
      name="select"
      value={value}
      onChange={handleChange}
    >
      {nameList.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
