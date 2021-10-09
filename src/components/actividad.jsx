import React from "react";

export default class Actividad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    // Este metodo nos sirve, para que el evento sea escuchado, tenido en cuenta!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      // Le decimos que el estado va a ser distinto a lo que es ahora.
      isActive: !prevState.isActive,
    }));
  }

  // En esta parte tambien se uso el Renderizado condicional, en otra rama, sera explicado de una mejor forma

  render() {
    const stateStatus = this.state.isActive;
    return (
      <div>
        {stateStatus ? (
          <p className="green">Esto se mostrara si el boton esta encendido!</p>
        ) : (
          <p className="red">Esto se mostrara si el boton esta apagado!</p>
        )}
        <button onClick={this.handleClick}> Click </button>
      </div>
    );
  }
}
