import React, {useState} from "react";
function Counter() {
    let [count, setCount] = useState(0)

    function add(){
      setCount(count+1)
    }
    
    function subtract(){
      setCount(count-1)
    }

    return(<div className="container">
            <h1>{count}</h1>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    )
}
export default Counter;
