import React from "react";
import Login from "./Components/Login";
import Form from "./Components/Form";

let isRegistered=false;

function App() {
  return (
    <div className="container">
      {isRegistered?<Login/>:<Form/>}
    </div>
  );
}

export default App;
