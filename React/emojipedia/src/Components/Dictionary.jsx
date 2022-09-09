import React from "react";
import Content from "./Content";
import emojipedia from "../emojipedia";

function Dictionary() {
    return(
        <div className="dictionary">
        {emojipedia.map(emojipedia => (<Content id={emojipedia.id} emoji={emojipedia.emoji} name={emojipedia.name} meaning={emojipedia.meaning}/>))}
        </div>
    )
}

export default Dictionary;