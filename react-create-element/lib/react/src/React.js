class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }
  update() {}
  #updater() {
    this.update(this.render());
    this.componentDidUpdate();
  }
  // Se llama antes que se renderice el componente
  componentWillMount() {}
  // Se llama cuando el componente ya se renderizo en el navegador
  componentDidMount() {}
  // Se llama cuando el componente se actualizó
  componentDidUpdate() {}
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.#updater();
  }
  build() {
    this.componentWillMount();
    return this.render();
  }
}

export { Component };
