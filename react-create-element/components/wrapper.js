import { Component } from "../lib/react/src/React.js";

class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return `
            <div class="wrapper">
                ${children}
            </div>
        `;
  }
}

export default Wrapper;
