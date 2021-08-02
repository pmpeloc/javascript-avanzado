import { createElement } from './react/index.js';

const styled = {};

const elements = ['h1', 'p', 'div', 'img', 'article', 'footer', 'header'];

function buildStyles(strings, dinamicValues, props) {
  let style = strings.slice();
  dinamicValues.forEach((value, index) => {
    style[index] += value(props);
  });
  console.log(style);
  return style.join('');
}

elements.forEach((tag) => {
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props, content) {
      const style = buildStyles(strings, dynamicValues, props);
      return createElement(
        tag,
        {
          ...props,
          style,
        },
        content
      );
    };
  };
});

export default styled;
