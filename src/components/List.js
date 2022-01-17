import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <h3>{age} years</h3>
          </div>
        );
      })}
    </>
  );
};

export default List;
