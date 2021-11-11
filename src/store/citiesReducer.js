const cities = (state = [], action) => {
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload.filter((city) => city.population > 50000);
    default:
      return state;
  }
};

export default cities;
