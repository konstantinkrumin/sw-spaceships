let values = {
  MGLT: [],
  cargo_capacity: [],
  cost_in_credits: [],
  hyperdrive_rating: [],
  length: [],
  max_atmosphering_speed: [],
};

function updateValuesArr(element, section) {
  if (!isNaN(element[section])) {
    values[section].push(element[section]);
  }

  if (values[section].length !== 0) {
    values[section] = values[section].sort(function (a, b) {
      return a - b;
    });
  }

  return values;
}

export { values, updateValuesArr };
