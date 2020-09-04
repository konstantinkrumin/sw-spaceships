import React from 'react';

import SpaceshipsAmount from './SpaceshipsAmount';

const AmountSelector = () => {
  return (
    <div className="amount-selector-container">
      <div className="amount-selector-text">
        Выберите количество звездолетов для сравнения
      </div>
      <SpaceshipsAmount />
    </div>
  );
};

export default AmountSelector;
