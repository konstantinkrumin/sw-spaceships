import React from 'react';

import ElementTextBlock from './ElementTextBlock';
import ElementTextBlockCompare from './ElementTextBlockCompare';

const StarshipElement = ({
  outliers,
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
      <ElementTextBlockCompare
        title="Cost In Credits"
        param={cost_in_credits}
        outliers={outliers.cost_in_credits}
      />
      <ElementTextBlockCompare
        title="Length"
        param={length}
        outliers={outliers.length}
      />
      <ElementTextBlockCompare
        title="Cargo Capacity"
        param={cargo_capacity}
        outliers={outliers.cargo_capacity}
      />
      <ElementTextBlockCompare
        title="MGLT"
        param={MGLT}
        outliers={outliers.MGLT}
      />
      <ElementTextBlockCompare
        title="Max Atmospheric Speed"
        param={max_atmosphering_speed}
        outliers={outliers.max_atmosphering_speed}
      />
      <ElementTextBlockCompare
        title="Hyperdrive Rating"
        param={hyperdrive_rating}
        outliers={outliers.hyperdrive_rating}
      />
    </div>
  );
};

export default StarshipElement;
