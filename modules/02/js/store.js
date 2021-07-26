import { createStore } from "./redux/index.js";
import reducer from "./reducers/index.js";
//   store.subscribe();
//   store.getState();
//   store.dispatch();
const store = createStore(reducer, 1360563);

export default store;
