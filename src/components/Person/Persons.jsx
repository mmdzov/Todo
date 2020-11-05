import React from "react";
import Person from "./Person";

const Persons = ({ deletePerson, persons ,changePerson }) => {
  return (
    <div className=''>
      {persons.map(({ id, ...person }) => (
        <Person
          key={id}
          {...person}
          deleted={() => deletePerson(id)}
          changed={(event) => changePerson(event,id)}
        />
      ))}
    </div>
  );
};

export default Persons;
