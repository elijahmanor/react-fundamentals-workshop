import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {
  let component;

  const render = props => {
    return shallow(<Button {...props} />);
  };

  it("should render a button", () => {
    const component = render();
    expect(component.type()).toBe("button");
  });

  it("should add a Button class", () => {
    const component = render();
    expect(component.prop("className")).toContain("Button");
  });

  it("should append additional classNames", () => {
    const component = render({ className: "Button-additional" });
    expect(component.prop("className")).toContain("Button-additional");
  });

  it("should add a is-disabled class if disabled prop is passed", () => {
    const component = render({ disabled: true });
    expect(component.prop("className")).toContain("is-disabled");
  });
});
