import React, {useState} from "react";

function Time() {
    let [time, setTime] = useState(new Date().toLocaleTimeString())
    function update(){
        setTime((new Date().toLocaleTimeString()))
    }
    setInterval(update, 1000)
    return(
        <div>
            <h2>{time}</h2>
        </div>
    )
}
export default Time;