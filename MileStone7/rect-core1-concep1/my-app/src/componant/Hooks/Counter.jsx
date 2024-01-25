import { useState } from "react";


const Counter = () => {
    const [count,setCount] = useState(20)
    const handlecount = ()=>{
        const newcount = count +10
        setCount(newcount)
    }
    const handlecounts = ()=>{
        const newcount = count - 10
        setCount(newcount)
    }

    return (
        <div style={{ border :"2px solid yellow", padding:'20px'}}>
            <h1>Count :{count} </h1>
            <button onClick={handlecount}>Add one Bye one </button>
            <button onClick={handlecounts}>Reduce one Bye one </button>
        </div>
    );
};

export default Counter;