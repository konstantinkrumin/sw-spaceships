import React from 'react';

import ElementTextBlock from './ElementTextBlock';

const StarshipElement = ({
  MGLT,
  cargo_capacity,
  cost_in_credits,
  crew,
  hyperdrive_rating,
  length,
  manufacturer,
  max_atmosphering_speed,
  model,
  name,
  passengers,
  starship_class,
}) => {
  return (
    <div className="starship-element">
      <ElementTextBlock title="Name" param={name} />
      <ElementTextBlock title="Model" param={model} />
      <ElementTextBlock title="Manufacturer" param={manufacturer} />
      <ElementTextBlock title="Starship Class" param={starship_class} />
      <ElementTextBlock title="Crew" param={crew} />
      <ElementTextBlock title="Passengers" param={passengers} />
      <ElementTextBlock title="Cost In Credits" param={cost_in_credits} />
      <ElementTextBlock title="Length" param={length} />
      <ElementTextBlock title="Cargo Capacity" param={cargo_capacity} />
      <ElementTextBlock title="MGLT" param={MGLT} />
      <ElementTextBlock
        title="Max Atmospheric Speed"
        param={max_atmosphering_speed}
      />
      <ElementTextBlock title="Hyperdrive Rating" param={hyperdrive_rating} />
    </div>
  );
};

export default StarshipElement;
