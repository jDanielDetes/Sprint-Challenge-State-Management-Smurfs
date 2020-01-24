import React, { useState } from "react";

const Form = props => {
  // console.log("this is our props",props);
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height:"",
  });

  
  const submitForm = e => {
    e.preventDefault();
    props.addNewSmurf(smurf);
  };


  const handleChanges = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
    
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="Name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChanges}
        name="name"
        value={smurf.name}
      />
      <label htmlFor="Age">Age</label>
       <input
        id="age"
        type="text"
        placeholder="age"
        onChange={handleChanges}
        name="age"
        value={smurf.age}
      />
      <label htmlFor="height">Height</label>
       <input
        id="height"
        type="text"
        placeholder="height"
        onChange={handleChanges}
        name="height"
        value={smurf.height}
      />
      <button type="submit">Invite To Village</button>
    </form>
  );
};

export default Form;