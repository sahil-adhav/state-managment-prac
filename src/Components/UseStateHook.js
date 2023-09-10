import React, { useState } from "react";
import "../App.css";
import { CONSTANTS } from "../constant";

const NewUseState = () => {
  const [list, setList] = useState(["John", "Megan", "Chad"]);
  const [name, setName] = useState("");

  const addName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <div className="useState-headline">UseStateHook with Array</div>

      <div className="newState-box">
        <div>
          {list.map((name) => (
            <p className="list-box" key={name}>
              {name}
            </p>
          ))}
        </div>
        <input
          className="list-box-input"
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="list-box-input input-box"
          type="submit"
          onClick={addName}
        >
          Add Name
        </button>
      </div>

      <div className="qna">
        <h3>Why not list.push() in addName</h3>
        <p>{CONSTANTS.newStateQna1}</p>
      </div>
    </div>
  );
};

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <div className="useState-headline">UseStateHook</div>
        <div className="btn-container">
          <button className="useState-button" onClick={addCount}>
            Count : {count}
          </button>
        </div>
        <div className="qna">
          <h3>Why not count++ in addCount() ?</h3>
          <p>{CONSTANTS.useStateQna1}</p>
          <h3>Why not count++ in setCount() instead of count + 1 ?</h3>
          <p>{CONSTANTS.useStateQna2_1}</p>
          <p>{CONSTANTS.useStateQna2_2}</p>
        </div>
      </div>
      <div>
        <NewUseState />
      </div>
    </>
  );
};

export default UseStateHook;
