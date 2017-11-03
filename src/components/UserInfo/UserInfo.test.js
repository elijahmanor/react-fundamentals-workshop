import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { getUser } from "../../services/user";
import UserInfo from "./UserInfo";

jest.mock("../../services/user", () => {
  return { getUser: jest.fn(() => Promise.resolve("user")) };
});

describe("UserInfo", () => {
  const render = callback => {
    return shallow(<UserInfo>{callback}</UserInfo>);
  };

  it("should return the user from the child func", () => {
    const callback = jest.fn();
    render(callback);
    getUser().then(() => {
      expect(callback).toHaveBeenCalledWith("user");
    });
  });
});
