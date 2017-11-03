import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Icon from "./Icon";

describe("Icon", () => {
  const render = props => {
    return shallow(<Icon {...props} />);
  };

  describe("button", () => {
    it("should render a button", () => {
      const component = render();
      expect(component.type()).toBe("button");
    });

    it("should add an Icon class", () => {
      const component = render();
      expect(component.prop("className")).toContain("Icon");
    });

    it("should invoke onClick when button is clicked", () => {
      const onClick = jest.fn();
      const component = render({ onClick });
      component.find("button").simulate("click");
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("i element", () => {
    it("should append additional classNames to i element", () => {
      const component = render({ className: "Icon-additional" });
      expect(component.find("i").prop("className")).toContain("Icon-additional");
    });

    it("should add a is-active class if isActive prop is passed", () => {
      const component = render({ isActive: true });
      expect(component.find("i").prop("className")).toContain("is-active");
    });

    it("should append additional classNames to i element", () => {
      const component = render();
      expect(component.find("i").prop("aria-hidden")).toBe("true");
    });
  });
});
