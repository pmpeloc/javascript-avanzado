import { createStore } from './redux/index.js';
import reducer from './reducers/index.js';
import movies from './movies.js';
import {
  movieListAsMap,
  getAllIds,
  getMostValuedId,
  getLeastValuedId,
} from './normalize.js';
//   store.subscribe();
//   store.getState();
//   store.dispatch();
const initialState = {
  movieList: movieListAsMap(movies),
  filter: 'all',
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedId(movies),
    leastValued: getLeastValuedId(movies),
  },
};
const store = createStore(reducer, initialState);

export default store;
