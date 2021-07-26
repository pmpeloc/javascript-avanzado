import store from "./store.js";
import { BURN } from "./actions/index.js";

store.subscribe(() => {
  const calorias = store.getState().toString();
  window.result.textContent = `Haz quemado ${parseFloat(calorias).toFixed(
    2
  )} calorías de 1360563`;
});

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  });
};

window.burn.addEventListener("click", burn);
