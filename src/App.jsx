
import './App.css';
import PropTypes from "prop-types";
import React from 'react'


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
}
const Test = ({ children }) => {
  console.log(typeof children);
  return <div>{children}</div>;
};
function App() {
  return (
    <div className="App">
      <SelfIntroddution
        name="somphone"
        dateOfBirth="2000 jun 26"
        hobbies={['coding', 'playing', 'sleeping']}
      />
      <Test>123</Test>
    </div>
  );
}

export default App;
