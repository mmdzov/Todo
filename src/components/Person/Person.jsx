import React from "react";

const Person = ({ fullName, deleted,changed }) => {
  return (
    <div className=''>
      <p>{`${fullName}`}</p>
      <input type="text" placeholder={fullName} onChange={changed} />
      <button onClick={deleted}>Delete</button>
    </div>
  );
};

export default Person;
