import React, { useState, useEffect } from 'react'


export default function Counter(props) {
    const [ count, setCount ] = useState(0);

    useEffect(() => {

        document.title = `You clicked ${count} times`;
    }, [count])

    return(
        <section>
            <button onClick={ () => { setCount(count +1) }}>
                clickMe!
            </button>
        </section>
    )
}