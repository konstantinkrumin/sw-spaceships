import React from 'react';

const OutliersElement = ({ title, max, min }) => {
  return (
    <div>
      <div>{title}</div>
      <div>Max: {max}</div>
      <div>Min: {min}</div>
    </div>
  );
};

export default OutliersElement;
