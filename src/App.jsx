import logo from './logo.svg';
import './App.css';
import keys from "./keys.json";
import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { evaluate } from "mathjs";
import { Key } from "./components/Key";
import { Display } from "./components/Display";
import background from "./ngebg.png";

const App = () => {
  const [total, setTotal] = useState([0]);
  const [error, setError] = useState(false);

  const handleClick = (val) => {
    try {
      if (val === undefined) {
        throw new Error("Value not defined")
      } else if (val === "clear") {
        setTotal([0]);
      } else if (val === "=") {
        let currentStr = total.join("");
        let newTotal = evaluate(currentStr);
        // limit number of chars for new total
        setTotal([newTotal]);
      } else {
        let newTotal = [...total, val];
        if (total[0] === 0) {
          newTotal.shift();
        }
        setTotal(newTotal);
      }
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };

  if (error) {
    return (
      <><div style={{ backgroundImage: `url(${background})` }}>
        
      </div><div className="Wrapper">
          <h1>We encountered an error</h1>
        </div></>
    );
  }
  return (
    <><div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div><div className="wrapper">
        <h1>ReactJS Calculator</h1>
        <div className="calcContainer">
          <Display val={total} />
          <div className="keyContainer">
            {keys.map((item, index) => {
              return (
                <Key
                  key={index}
                  val={item.val}
                  alias={item.alias}
                  style={item.style}
                  handleClick={handleClick} />
              );
            })}
          </div>
        </div>
      </div></>
  );
};

export default App;