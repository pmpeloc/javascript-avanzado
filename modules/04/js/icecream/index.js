import { makeIceCream } from "./icecream-machine.js";

const $flavors = document.querySelectorAll(".flavor");
var selectedFlavors = [];
$flavors.forEach(($el) => $el.addEventListener("click", selectFlavor));
function selectFlavor() {
  if (!selectedFlavors.includes(this)) {
    selectedFlavors.push(this);
    this.classList.toggle("is-active", true);
    if (selectedFlavors.length > 2) {
      let deleted = selectedFlavors.shift();
      deleted.classList.toggle("is-active", false);
    }
  } else if (selectedFlavors.includes(this)) {
    selectedFlavors.splice(selectedFlavors.indexOf(this), 1);
    this.classList.toggle("is-active", false);
  }
}

window.btn.addEventListener("click", () => {
  const $flavors = document.querySelectorAll(".flavor.is-active");
  try {
    makeIceCream($flavors[0], $flavors[1]);
  } catch (error) {
    alert("Aún no completas los sabores para preparar tu helado");
  }
});
