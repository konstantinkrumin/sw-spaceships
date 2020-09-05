import React from 'react';

const OutliersElement = ({ title, max, min }) => {
  return (
    <div className="outlier-element">
      <div className="outlier-element-title">{title}</div>
      <div className="outlier-element-text">Max: {max}</div>
      <div className="outlier-element-text">Min: {min}</div>
    </div>
  );
};

export default OutliersElement;
