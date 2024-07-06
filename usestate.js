import React,{useState} from "react";
function Counter(){
    const[Count,setCount]=useState(0);
    function increment()
    {
        setCount(Count + 1);
    }
    function decrement()
    {
            setCount(Count - 1);
    }
        return(
            <div>
                <p>Count:(0)</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        );
    }
export default Counter;
