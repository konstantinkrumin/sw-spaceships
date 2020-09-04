import React, { useEffect } from 'react';

const ElementTextBlock = ({ title, param, outliers }) => {
  return (
    <div className="starship-element-text">
      <div className="starship-element-title">{title}</div>
      <div className={`starship-element-characteric`}>{param}</div>
    </div>
  );
};

export default ElementTextBlock;
