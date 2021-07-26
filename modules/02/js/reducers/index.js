import { BURN } from "../actions/index.js";

const reducer = (state, action) => {
  switch (action.type) {
    case BURN:
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
