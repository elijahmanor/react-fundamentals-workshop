import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Fuse from "../Fuse/Fuse";
import Fuses from "./Fuses";

jest.mock("../Fuse/Fuse", () => "Fuse");

describe("Fuses", () => {
  let component,
    onBomb = () => {},
    onReply = () => {};

  const render = props => {
    props = {
      fuses: [
        { id: "1", message: "fuse1" },
        { id: "2", message: "fuse2" },
        { id: "3", message: "fuse3" }
      ],
      onBomb,
      onReply
    };
    return shallow(<Fuses {...props} />);
  };

  beforeEach(() => {
    component = render();
  });

  it("should render 3 fuses", () => {
    expect(component.find("Fuse").length).toBe(3);
  });

  it("should pass onBomb along to each fuse", () => {
    component.find("Fuse").forEach(fuse => {
      expect(fuse.prop("onBomb")).toBe(onBomb);
    });
  });

  it("should pass onReply along to each fuse", () => {
    component.find("Fuse").forEach(fuse => {
      expect(fuse.prop("onReply")).toBe(onReply);
    });
  });

  it("should spread other values of each fuse to the Fuse component", () => {
    component.find("Fuse").forEach((fuse, index) => {
      expect(fuse.prop("message")).toBe(`fuse${index + 1}`);
    });
  });
});
