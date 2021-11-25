const status = (state = 'fafdasf fsdfasdf adsf asdf asd fsadsdfds', action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return action.payload;
    default:
      return state;
  }
};

export default status;
