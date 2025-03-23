import React, { useState } from 'react';
import './App.css';
import PropTypes from "prop-types";



const SelfIntroddution = ({ name = 'unknown', dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>My name is : <span style={{ color: 'red' }}>{name}</span> </h1>
      {dateOfBirth ? <h1> i was born on {dateOfBirth} </h1> : null}
      {hobbies.length === 0 ? null :
        <div>
          <h1>My hobbies are : </h1>
          <ul>
            {hobbies.map((item, index) => <div key={item}>  {index + 1}. {item}</div>)}
          </ul>
        </div>

      }

    </div>);
};
// <SelfIntroddution}

SelfIntroddution.prototype = {
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string,
  hobbies: PropTypes.array
};
const Test = ({ children }) => {
  console.log(typeof children);
  return <div>{children}</div>;
};
function App() {
  const [data, setData] = useState({ name: undefined });
  const [name, setName] = useState("");
  return (
    <div className="App">
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setData({ name });
          setName("");
        }}
      >
        Save</button>

      <SelfIntroddution
        name={data.name}
        dateOfBirth="2000 jun 26"
        hobbies={['coding', 'playing', 'sleeping']}
      />
      <Test>123</Test>
    </div>
  );
}

export default App;
