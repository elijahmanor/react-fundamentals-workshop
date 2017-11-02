import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Fuse from "../Fuse/Fuse";
import Fuses from "./Fuses";

jest.mock("../Fuse/Fuse", () => () => <div>Fuse</div>);

describe("Fuses", () => {
  let component;

  const render = props => {
    props = {
      fuses: [
        { id: "1", message: "fuse1" },
        { id: "2", message: "fuse2" },
        { id: "3", message: "fuse3" }
      ],
      ...props
    };
    return shallow(<Fuses {...props} />);
  };

  beforeEach(() => {
    component = render();
  });

  it("should render 3 fuses", () => {
    expect(component.find(Fuse).length).toBe(3);
  });

  it("should spread other values of each fuse to the Fuse component", () => {
    component.find(Fuse).forEach((fuse, index) => {
      expect(fuse.prop("message")).toBe(`fuse${index + 1}`);
    });
  });

  it("should pass the onBomb prop down to the Fuse component", () => {
    const onBomb = jest.fn();
    component = render({ onBomb });
    component
      .find(Fuse)
      .first()
      .prop("onBomb")();
    expect(onBomb).toHaveBeenCalled();
  });
});
