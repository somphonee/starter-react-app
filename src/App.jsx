import React, { useState } from 'react';
import './App.css';
import PropTypes from "prop-types";

import "dayjs/locale/lo";
import dayjs from 'dayjs';
import bhuddishtEra from 'dayjs/plugin/buddhistEra';
import localizedFormat from 'dayjs/plugin/localizedFormat';


dayjs.locale('lo');
dayjs.extend(localizedFormat);
dayjs.extend(bhuddishtEra);






const SelfIntroddution = ({ name = 'unknown', dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>My name is : <span style={{ color: 'red' }}>{name}</span> </h1>
      {dateOfBirth ? <h1> i was born on {dayjs(dateOfBirth).format("D MMMM YYYY")} </h1> : null}
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
  const [data, setData] = useState({ name: undefined, dateOfBirth: undefined });
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  return (
    <div className="App">
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="Date Of Birth">Date Of Birth:</label>
      <input id="Date Of Birth" type="date" pattern="mm/dd/yyyy" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

      <button
        onClick={() => {
          setData({ name, dateOfBirth });
          setName("");
          setDateOfBirth("");
        }}
      >
        Save</button>

      <SelfIntroddution
        name={data.name}
        dateOfBirth={data.dateOfBirth}
        hobbies={['coding', 'playing', 'sleeping']}
      />
      <Test>123</Test>
    </div>
  );
}

export default App;
