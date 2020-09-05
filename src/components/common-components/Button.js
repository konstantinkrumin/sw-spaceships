import React from 'react';

const Button = ({ centerButton }) => {
  return (
    <input className={`button ${centerButton}`} type="submit" value="Выбрать" />
  );
};

export default Button;
