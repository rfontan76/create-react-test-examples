import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo.svg" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

export const add = (x, y) => {
  return x + y;
};

export const total = (shipping, subtotal) => {
  return "$" + add(shipping, subtotal);
};

export const getUserName = userName => {
  return userName;
};

export const getUserFullName = (firstName, lastName) => {
  const userfullName = [];
  userfullName.push(firstName);
  userfullName.push(lastName);

  return userfullName;
};
