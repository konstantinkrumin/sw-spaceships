import React from 'react';

import AmountSelector from './setup-components/AmountSelector';
import SpaceshipsSelector from './setup-components/SpaceshipsSelector';

const SetupContainer = () => {
  return (
    <div className="setup-container">
      <AmountSelector />
      <SpaceshipsSelector />
    </div>
  );
};

export default SetupContainer;
