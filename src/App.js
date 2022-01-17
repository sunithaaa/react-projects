import React, { useState } from "react";
import List from "./components/List";
import data from "./components/data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h3>{people.length} bitrthday today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
    </div>
  );
};

export default App;
