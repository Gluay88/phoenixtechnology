import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const handleChagne = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChagne} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
