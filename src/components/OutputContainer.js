import React, { useState, useEffect, useContext } from 'react';

import OutliersContainer from './output-components/OutliersContainer';
import StarshipElement from './output-components/StarshipElement';

import { values, updateValuesArr } from '../helpers/updateValuesArr';
import Context from '../context';

function OutputContainer() {
  const { data, spaceshipsCompare } = useContext(Context);

  const valueNames = [
    'MGLT',
    'cargo_capacity',
    'cost_in_credits',
    'hyperdrive_rating',
    'length',
    'max_atmosphering_speed',
  ];

  const [outliers, setOutliers] = useState({});
  const [isLatestLoaded, setIsLatestLoaded] = useState(false);

  useEffect(() => {
    let minMax = {};

    for (let i = 0; i < data.length; i++) {
      if (spaceshipsCompare.includes(data[i].name)) {
        valueNames.map((name, _) => updateValuesArr(data[i], name));

        if (data[i].name === spaceshipsCompare[spaceshipsCompare.length - 1]) {
          valueNames.map((name, _) => {
            minMax[name] = {
              max: values[name][values[name].length - 1],
              min: values[name][0],
            };
          });
        }
      }
    }

    setOutliers(minMax);
  }, [spaceshipsCompare]);

  useEffect(() => {
    setIsLatestLoaded(true);
  }, [outliers]);

  let filteredElements = [];
  for (let i = 0; i < data.length; i++) {
    if (spaceshipsCompare.includes(data[i].name)) {
      filteredElements.push(
        <StarshipElement
          MGLT={data[i].MGLT}
          cargo_capacity={data[i].cargo_capacity}
          cost_in_credits={data[i].cost_in_credits}
          crew={data[i].crew}
          hyperdrive_rating={data[i].hyperdrive_rating}
          length={data[i].length}
          manufacturer={data[i].manufacturer}
          max_atmosphering_speed={data[i].max_atmosphering_speed}
          model={data[i].model}
          name={data[i].name}
          passengers={data[i].passengers}
          starship_class={data[i].starship_class}
        />
      );
    }
  }

  if (isLatestLoaded) {
    return (
      <div className="output-container">
        <div className="outliers-center-wrapper">
          <OutliersContainer outliers={outliers} />
        </div>

        <div className="output-elements-wrapper">{filteredElements}</div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default OutputContainer;
