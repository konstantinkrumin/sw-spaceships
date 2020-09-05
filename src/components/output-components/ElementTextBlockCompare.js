import React, { useState, useEffect } from 'react';

const ElementTextBlockCompare = ({ title, param, outliers }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (Object.keys(outliers).length !== 0 && outliers.constructor === Object) {
      setIsLoaded(true);
    }
  }, [outliers]);

  if (isLoaded) {
    return (
      <div className="starship-element-text">
        <div className="starship-element-title">{title}</div>
        <div className={`starship-element-characteric`}>{param}</div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ElementTextBlockCompare;
