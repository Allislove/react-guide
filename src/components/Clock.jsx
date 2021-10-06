import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // Definmos el estado, con la fecha actual
        this.state = {
            date: new Date(),
        }
    }

    // Metodo de montaje, se ejecuta despues de que la salida del componete ha sido renderizada.
    // Este metodo sera de gran importancia para que el estado(date), se actualice cada vez, que setState se llama

    // Le pasamos el intervalo, por ende cada segundo este metodo sera llamado, y llamara ahora, al metodo actualizarEstado();
    componentDidMount() {
        let counter = 0;
        
        this.TimerId = setInterval(() => {
            counter += 1;
            //console.log('Mira el pasar del contador: ', + counter);
            this.actualizarEstado();
        })


    }

    // Si desmontamos el componente(Clock), este metodo se ejecutaria y quitaria la actualizacion que se muestra
    // en pantalla cada segundo.
    componentWillUnmount() {
        // Llamamos a clearInterval, para limpiar el intervalo!
        clearInterval(this.TimerId);
    }


    /* Creamos un metodo para poder actualizar el estado inicial, de nuestro dato(date), y como logramos esto?
       Esto lo logramos gracias al metodo setState, que le pasamos un objeto, e identificamos nuestro dato(variable),
       en este caso es date, que vamos a actualizar. */
    actualizarEstado() {
        // Llamamos el metodo setState.. Es la unica y mejor forma para hacerlo.
        this.setState({
            date: new Date(),
        })

    }

    render() {
        return(
            <div>
                <h1> Clock / Reloj</h1>
                <b className="blue"> { this.state.date.toLocaleTimeString() } </b>


            </div>
        )
    } 

}

export default Clock;