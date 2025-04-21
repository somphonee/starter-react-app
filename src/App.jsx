import React, { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import "@picocss/pico";

import "dayjs/locale/lo";
import dayjs from "dayjs";
import bhuddishtEra from "dayjs/plugin/buddhistEra";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("lo");
dayjs.extend(localizedFormat);
dayjs.extend(bhuddishtEra);

const SelfIntroddution = ({ name = "unknown", dateOfBirth = null, hobbies = [] }) => {
  return (
    <div>
      <h1>
        My name is : <span style={{ color: "red" }}>{name}</span>{" "}
      </h1>
   
        <h1> i was born on:  <span>{dayjs(dateOfBirth).format("D MMMM YYYY")}</span>{" "}</h1>

      {hobbies.length === 0 ? null : (
        <div>
          <h1>My hobbies are : </h1>
          <ul>
            {hobbies.map((item, index) => (
              <div key={item}>
                {" "}
                {index + 1}. {item}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
// <SelfIntroddution}

SelfIntroddution.prototype = {
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string,
  hobbies: PropTypes.array,
};
const Test = ({ children }) => {
  console.log(typeof children);
  return <div>{children}</div>;
};
function App() {
  const [data, setData] = useState({ name: undefined, dateOfBirth: undefined, hobbies: [] });
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [hobbies, setHobbies] = useState([""]);
  console.log(hobbies);
  return (
    <div className="App">
      <div style={{
        display: "grid", gridTemplateColumns: "160px 1fr 48px", gap: "0.5rem"
      }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ gridColumn: "span 2" }}
        />
        <label htmlFor="Date Of Birth">Date Of Birth:</label>
        <input
          id="Date Of Birth"
          type="date"
          pattern="mm/dd/yyyy"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          style={{ gridColumn: "span 2" }}
        />
        {hobbies.map((item, index) => (
          <div key={index} style={{ display: "contents" }}>
            <label htmlFor="hobbies">Hobbies: {index + 1}: </label>
            <input
              id={`hobby-${index}`}
              value={item}
              onChange={e => {
                const newValue = e.target.value;
                const newHobbies = hobbies.map((hobby, hobbyIndex) => hobbyIndex === index ? newValue : hobby);
                console.log("newHobbies", newHobbies);
                setHobbies(newHobbies);
              }}
            />
            <button
              onClick={() => {
                const newHobbies = hobbies.filter((_, hobbyIndex) => hobbyIndex !== index);
                setHobbies(newHobbies);
              }}
            >-</button>
          </div>
        ))}
        <button onClick={() => setHobbies([...hobbies, ""])}
          style={{ gridColumn: "2", width: "max-content" }}
        >Add anothor hobby</button>
        <button
          onClick={() => {
            setData({ name, dateOfBirth , hobbies });
            setName("");
            setDateOfBirth("");
            setHobbies([""]);
          }}
          style={{ gridColumn: "1 / spam 3", backgroundColor: "lightblue" }}
        >
          Save
        </button>
      </div>

      <SelfIntroddution
        name={data.name}
        dateOfBirth={data.dateOfBirth}
        hobbies={data.hobbies}
      />
    </div>
  );
}

export default App;
