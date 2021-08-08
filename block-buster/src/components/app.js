import { Component } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';
import Actions from './actions.js';
import Filters from './filters.js';
import Header from './header.js';
import MovieList from './movie-list.js';
import Search from './search.js';

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [new Search(), new Filters()],
        }),
        new MovieList(),
      ],
    });
  }
}

export default App;
