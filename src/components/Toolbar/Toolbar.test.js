import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Button from "../Button/Button";

import Toolbar from "./Toolbar";

describe("Toolbar", () => {
  let component;

  const render = props => {
    return shallow(<Toolbar {...props} />);
  };

  beforeEach(() => {
    component = render();
  });

  it("should have two toolbar items", () => {
    expect(component.find(".Toolbar-item").length).toEqual(2);
  });

  describe("logo", () => {
    it("should render overreact", () => {
      expect(
        component
          .find(".Toolbar-item")
          .first()
          .text()
      ).toBe("overreact");
    });
  });

  describe("fuse", () => {
    let onNew;

    beforeEach(() => {
      onNew = jest.fn();
      component = render({ onNew });
    });

    it("should render a button", () => {
      expect(component.find(Button)).toBeTruthy();
    });

    it("should have text Fuse", () => {
      expect(component.find(Button).prop("children")).toBe("Fuse");
    });

    it("should invoke onNew when clicked", () => {
      component.find(Button).simulate("click");
      expect(onNew).toBeCalled();
    });
  });
});
