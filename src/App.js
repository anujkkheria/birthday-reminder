// imports
//use state - for state management - for example changeing a value on the screen in case of an event like onclick
import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  //variable declaration
  //let - variable that can change
  //var - this old and depriciated.
  //const - this is always constant

  // useState syntax
  // people - variable setpeople - function
  //const [variable, <- function] = useState(initial value)
  const [people, setpeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday's today</h3>
        <List people={people} />
        {/* {people} */}
        <button onClick={() => setpeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
