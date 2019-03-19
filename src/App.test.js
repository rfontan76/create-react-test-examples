import React from "react";
import { shallow, mount, render } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";
import { total, getUserName, getUserFullName } from "./App";

test("Test1:renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

//Shallow
test("Test2:Smallest shallow test", () => {
  shallow(<App />);
});

//Shallow rendering is great for isolated unit tests,
//but you may still want to create some full rendering tests to ensure the components integrate correctly.
//Enzyme supports full rendering with mount(), and you can also use it for testing state changes and component lifecycle.
test("Test3:renders header", () => {
  const wrapper = shallow(<App />);
  const welcome = (
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
  );

  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toBe(true);
});

//Mocking add function to always return 3 during the execution of this tests
const add = jest.fn(() => 3);

//Unit Test
test("Test4:add function test with const", () => {
  const numero = 1;
  const value = add(numero, 2);
  expect(value).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
});
//Unit Test
test("Test5:add function test without const", () => {
  expect(add(1, 1)).toBe(3);
  expect(add).toHaveBeenCalledTimes(2);
  expect(add).toHaveBeenCalledWith(1, 1);
});
//Unit Test
test("Test6:fake test:expect truthy", () => {
  expect(true).toBeTruthy();
});
//Unit Test
test("Test7:fake test:expect falsy", () => {
  expect(false).toBeFalsy();
});

//Integration Test: Test things working together
//Total function relies on add function
//Will not be subject to micking add beacuse it resolves add via total function
test("Test8:total function integration test (add,total)", () => {
  expect(total(5, 20)).toBe("$25");
});

test("Test9:My name is STRING", () => {
  const name = getUserName("rodrigo fontan");
  expect(name).toBe("rodrigo fontan");
});

//Array and Objects use equal to verify
test("Test10:My full name is ARRAY", () => {
  const name = getUserFullName("rodrigo", "fontan");
  expect(name).toEqual(["rodrigo", "fontan"]);
});

test("Test11:weight should be 800 lbs", () => {
  const load1 = 200;
  const load2 = 300;
  expect(load1 + load2).toBeLessThanOrEqual(500);
});
