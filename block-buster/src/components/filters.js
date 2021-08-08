import { SET_FILTER } from '../actions/index.js';
import { Component, createElement } from '../lib/react/index.js';
import store from '../store.js';
import Select from './select.js';

class Filters extends Component {
  handleChange = (event) => {
    store.dispatch({
      type: SET_FILTER,
      payload: event.target.value,
    });
  };
  render() {
    return Select({
      onChange: this.handleChange,
      children: [
        createElement('option', { value: 'all' }, 'Todas'),
        createElement('option', { value: 'mostValued' }, 'La más valoradas'),
        createElement(
          'option',
          { value: 'leastValued' },
          'Las menos valoradas'
        ),
      ],
    });
  }
}

export default Filters;
