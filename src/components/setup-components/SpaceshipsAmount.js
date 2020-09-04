import React, { useState, useEffect, useContext } from 'react';

import Button from '../common-components/Button';

import Context from '../../context';

export default function SpaceshipsAmount() {
  const { numSpaceshipsTotal, setNumSpaceshipsShow } = useContext(Context);

  const DEFAULT_VALUE = 2;
  const [value, setValue] = useState(DEFAULT_VALUE);

  useEffect(() => {
    setNumSpaceshipsShow(DEFAULT_VALUE);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setNumSpaceshipsShow(value);
    event.preventDefault();
  };

  return (
    <form className="input-num-form" onSubmit={handleSubmit}>
      <input
        className="input-num-field"
        type="number"
        value={value}
        min={1}
        max={numSpaceshipsTotal}
        onChange={handleChange}
      />
      <Button />
    </form>
  );
}
