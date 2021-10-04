import React from 'react'


const Users = (props) => {

    /* Recibimos las propiedades que le pasamos al componente, y se la pasamos en el componente view.jsx,
    que viene sinedo ahora su padre!   */
    const users = props.users;
    const title = props.title;

    // Descomenta si deseas ver que contiene users, antes de ser mostrado en el navegador!
    // console.log(users);

    // Con el map recorremos el array.
    const renderUsers = users.map((user, index) => {
        return(
                <li key={index}>
                    { user.name }
                </li>
        )
    })

    return(
        <div className="userLists">
            <h3> { title } </h3>
            <ol>
                { renderUsers }
            </ol>

        </div>
    )


}


export default Users;
