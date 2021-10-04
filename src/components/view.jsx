import React from 'react'
import Users from './users';


const View = (props) => {
    
/*     Este componente contiene la data de los Usuarios, pero esta data, va a ser representada y manipulada
    directamente desde el componente de users.jsx, de alguna u otra forma con esto tambien conseguimos
    encapsular nuestro código de una manera muy efectiva. */
    
    const allUsers = [
        { id: 1, "name": "Jesús" },
        { id: 2, "name": "Andres" },
        { id: 3, "name": "Bill Gates" },
        { id: 4, "name": "Douglas Crockford" },
        { id: 5, "name": "Jeff Bezos" },
    ]

    return(
        <div className="userLists">
            <Users users={ allUsers } title="Lista de Usuarios!" />
        </div>
    )


}


export default View;

