import React, {useState} from "react";

function Form() {
    const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    let {name, value} = event.target;
    setContact(prevValue=>({...prevValue, [name]:value}))}

  function handleClick(event){
    event.preventDefault()
  }

  return (
    <div>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input name="fName" value={contact.fName} placeholder="First Name" onChange={handleChange}  />
        <input name="lName" value={contact.lName} placeholder="Last Name" onChange={handleChange} />
        <input name="email" value={contact.email} placeholder="Email" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
    )
}

export default Form;