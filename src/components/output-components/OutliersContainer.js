import React, { useState, useEffect } from 'react';

import OutliersElement from './OutliersElement';

const OutliersContainer = ({ outliers }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (Object.keys(outliers).length !== 0 && outliers.constructor === Object) {
      setIsLoaded(true);
    }
  }, [outliers]);

  if (isLoaded) {
    return (
      <div>
        <OutliersElement
          title="MGLT"
          max={outliers.MGLT.max}
          min={outliers.MGLT.min}
        />

        <OutliersElement
          title="Cargo Capacity"
          max={outliers.cargo_capacity.max}
          min={outliers.cargo_capacity.min}
        />

        <OutliersElement
          title="Cost in Credits"
          max={outliers.cost_in_credits.max}
          min={outliers.cost_in_credits.min}
        />

        <OutliersElement
          title="Hyperdrive Rating"
          max={outliers.hyperdrive_rating.max}
          min={outliers.hyperdrive_rating.min}
        />

        <OutliersElement
          title="Length"
          max={outliers.length.max}
          min={outliers.length.min}
        />

        <OutliersElement
          title="Max Atmosphering Speed"
          max={outliers.max_atmosphering_speed.max}
          min={outliers.max_atmosphering_speed.min}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default OutliersContainer;
