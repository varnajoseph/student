import React, { useState } from "react";
import "./App.css";


export const StudentInfo = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [myclass, setMyClass] = useState("");
  const [div, setDiv] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(date);
    console.log(myclass);
    console.log(div);
    console.log(gender);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="fullname"
          />
        </div>
        <div>
          <label>Date of birth: </label>
          <div className="main">
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Class: </label>
          <select value={myclass} onChange={(e) => setMyClass(e.target.value)}>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="XI">XI</option>
            <option value="X">X</option>
            <option value="XII">XII</option>
            <option value="XI2">XI2</option>
          </select>
        </div>

        <label>Division: </label>
        <select value={div} onChange={(e) => setDiv(e.target.value)}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <br></br>

        <label>Gender</label>
        <div>
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
