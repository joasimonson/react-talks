import React, { useState } from 'react';

function FuncCounter(){

    const[count, setCount] = useState(0);

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default FuncCounter;