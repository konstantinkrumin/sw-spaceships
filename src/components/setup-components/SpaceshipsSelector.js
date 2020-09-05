import React, { useState, useEffect, useContext } from 'react';

import Dropdown from './Dropdown';
import Button from '../common-components/Button';

import Context from '../../context';

const SpaceshipsSelector = () => {
  const { numSpaceshipsShow, nameList, setSpaceshipsCompare } = useContext(
    Context
  );

  const [selectedSpaceships, setSelectedSpaceships] = useState({});

  useEffect(() => {
    let tempObj = {};
    for (let i = 0; i < numSpaceshipsShow; i++) {
      tempObj[`element-${i}`] = '';
    }
    setSelectedSpaceships(tempObj);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpaceshipsCompare(Object.values(selectedSpaceships));
  };

  let dropdowns = [];
  for (let i = 0; i < numSpaceshipsShow; i++) {
    dropdowns.push(
      <Dropdown
        ID={`element-${i}`}
        selectedSpaceships={selectedSpaceships}
        setSelectedSpaceships={setSelectedSpaceships}
      />
    );
  }

  if (Array.isArray(nameList)) {
    return (
      <div className="spaceships-selector-container">
        <div className="spaceships-selector-text">
          Выбрать звездолеты для сравнения
        </div>
        <form className="dropdown-form" onSubmit={handleSubmit}>
          <div className="dropdowns-container">{dropdowns}</div>
          <Button centerButton="center-button" />
        </form>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SpaceshipsSelector;
