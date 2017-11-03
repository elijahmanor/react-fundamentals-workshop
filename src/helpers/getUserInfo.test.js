import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { getUser } from "../services/user";
import getUserInfo from "./getUserInfo";

jest.mock("../services/user", () => {
  return { getUser: jest.fn(() => Promise.resolve("user")) };
});

describe("getUserInfo", () => {
  const BasicComponent = () => <div />;
  const AdvancedComponent = getUserInfo(BasicComponent);

  const render = props => {
    return shallow(<AdvancedComponent {...props} />);
  };

  it("should set state of returned user", () => {
    const onLoad = jest.fn();
    const component = render({ onLoad });

    return getUser().then(() => {
      expect(component.state("user")).toBe("user");
    });
  });

  it("should pass user state as a prop to child component", () => {
    const onLoad = jest.fn();
    const component = render({ onLoad });

    return getUser()
      .then(() => {
        component.update();
      })
      .then(() => {
        const element = component.find(BasicComponent);
        expect(element.prop("user")).toBe("user");
      });
  });

  it("should call parent component's onLoad passing user", () => {
    const onLoad = jest.fn();
    const component = render({ onLoad });

    return getUser().then(() => {
      expect(onLoad).toHaveBeenCalledWith({ user: "user" });
    });
  });
});
