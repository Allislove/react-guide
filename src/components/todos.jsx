import React, { useState, useEffect } from 'react';


export default function Todos(props){
    
    const initialTodos = [
        { todo: "Learn Hooks", completed: false},
        { todo: "Learn NodeJS", completed: true},
        { todo: "Learn Docker", completed: true},
        { todo: "Learn git", completed: true},
        { todo: "Learn Express", completed: false},
        { todo: "Learn Kubernetes", completed: false},
        { todo: "Learn Java", completed: false},
        { todo: "Learn Relational DB Advanced SQL", completed: false}
    ]

    //Tasks states
    const [ todos, setTodos ] = useState(initialTodos);

    const addNewTodo = () => {
        setTodos([ ...todos, { todo: "Learn JavaScript", completed: true } ])
    }
    console.log(todos)
    const allTodos = todos.map((todo, index) => {
        return(
            <article>
                <li key={index}> {todo.todo} </li>
            </article>
        )
    })

    /*Probamos el useEffect, con una funcion, y en este caso
    esta funcion, va actuar en el estado de todos! Es decir
    cada vez que añadamos un item, se va a renderizar, a prueba de ello
    mando un mensaje a la consola del navegador!
    */
    useEffect(() => {
        console.log("Se ha añadido una nueva tarea!");
    }, [todos])

    return(
        <section className="todosItem">
            <ol>
                { allTodos }
            </ol>

            <form>
                <label> Tarea</label>
                <input type="text" name="name" value={allTodos.todo} />
                <label> Completed?</label>

            </form>


            <button onClick={ () => { addNewTodo() }}>
                AddTask!
            </button>
        </section>
    )

}