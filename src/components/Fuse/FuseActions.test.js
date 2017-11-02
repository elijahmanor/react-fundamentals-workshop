import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Icon from "../Icon/Icon";
import FuseActions from "./FuseActions";

jest.mock("../Icon/Icon", () => () => <div>Icon</div>);

describe("FuseActions", () => {
  const user = { fullName: "John Smith" };
  let component, elements;

  const render = props => {
    props = {
      id: "1",
      bomb: false,
      onBomb() {},
      ...props
    };

    return shallow(<FuseActions {...props} />);
  };

  beforeEach(() => {
    component = render();
    elements = component.find(Icon);
  });

  it("should have two icons", () => {
    expect(elements.length).toBe(2);
  });

  it("should render a comment icon", () => {
    const icon = elements.first();
    expect(icon.prop("type")).toBe("comment-o");
  });

  it("should render a bomb button", () => {
    const icon = elements.last();
    expect(icon.prop("type")).toBe("bomb");
  });

  it("should add is-active to bomb if prop is true", () => {
    component = render({ bomb: true });
    const icon = component.find(Icon).last();
    expect(icon.prop("isActive")).toBe(true);
  });
});
