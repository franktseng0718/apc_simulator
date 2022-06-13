const defaultStrategy = (moisture, mFactor) => {

  return {
    period: (moisture * mFactor).toFixed(2),
    temperature: 100,
  };
};

const sharonStrategy = (thickness, tFactor) => {

  return {
    period: 20,
    temperature:(thickness * tFactor).toFixed(2),
  };
};

const ribeyeStrategy = (thickness, tFactor) => {

  return {
    period: 22,
    temperature:(thickness * tFactor).toFixed(2),
  };
};

const newyorkStrategy = (thickness, tFactor) => {

  return {
    period: 25,
    temperature:(thickness * tFactor).toFixed(2),
  };
};

module.exports = {
  defaultStrategy,
  sharonStrategy,
  ribeyeStrategy,
  newyorkStrategy,
};
