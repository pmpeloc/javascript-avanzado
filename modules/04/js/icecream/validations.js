export default function isRequired(param) {
  throw new Error(`${param} es requerido`);
}
