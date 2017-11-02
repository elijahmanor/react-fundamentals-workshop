import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { getUser } from "../../services/user";
import App from "./App";

jest.mock("../../services/user", () => {
  return { getUser: jest.fn(() => Promise.resolve()) };
});

it("renders without crashing", () => {
  shallow(<App />);
});
