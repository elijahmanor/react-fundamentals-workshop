import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ReactModal from "react-modal";
import Button from "../Button/Button";
import Compose from "./Compose";

jest.mock("../Button/Button", () => "Button");
jest.mock("react-modal", () => "ReactModal");

describe("Compose", () => {
  let component;

  const render = props => {
    return shallow(<Compose {...props} />);
  };

  beforeEach(() => {});

  describe("render", () => {
    let element;

    beforeEach(() => {
      component = render();
      element = component.find("ReactModal");
    });

    describe("modal", () => {
      it("should have default props", () => {
        expect(component.props()).toMatchObject({
          className: "Compose-modal",
          contentLabel: "Minimal Modal Example",
          isOpen: false,
          overlayClassName: "Compose-overlay"
        });
      });
    });

    describe("header", () => {
      beforeEach(() => {
        element = component.find(".Compose-header");
      });

      it("should have the correct text", () => {
        expect(element.text()).toBe("Compose New Fuse");
      });

      it("should have a button", () => {
        expect(element.find(".Compose-close").type()).toBe("button");
      });
    });

    describe("textarea", () => {
      beforeEach(() => {
        component = render({ fuse: "testing" });
        element = component.find(".Compose-text");
      });

      it("should render a textarea", () => {
        expect(element.type()).toBe("textarea");
      });

      it("should render text from props", () => {
        expect(element.prop("value")).toBe("testing");
      });

      it("should update state.fuse on change", () => {
        component = render();
        element = component.find(".Compose-text");
        element.simulate("change", { target: { value: "onchange" } });
        expect(component.state("fuse")).toBe("onchange");
      });
    });

    describe("validation", () => {
      it("should render a validation count", () => {
        component = render({ fuse: "" });
        element = component.find(".Compose-validation");
        expect(element).toBeTruthy();
      });

      describe("empty", () => {
        it("should render a validation count", () => {
          component = render({ fuse: "" });
          element = component.find(".Compose-validation");
          expect(element.text()).toBe("256");
        });
      });

      describe("little", () => {
        it("should render a validation count", () => {
          component = render({ fuse: "x".repeat(100) });
          element = component.find(".Compose-validation");
          expect(element.text()).toBe("156");
        });
      });

      describe("warn", () => {
        it("should render a validation count", () => {
          component = render({ fuse: "x".repeat(200) });
          element = component.find(".Compose-validation");
          expect(element.text()).toBe("56");
        });

        it("should look like a warning", () => {
          component = render({ fuse: "x".repeat(200) });
          element = component.find(".Compose-validation");
          expect(element.prop("className")).toContain("Compose-validation--warn");
        });
      });

      describe("max", () => {
        it("should render a validation count", () => {
          component = render({ fuse: "x".repeat(256) });
          element = component.find(".Compose-validation");
          expect(element.text()).toBe("0");
        });

        it("should look like a warning", () => {
          component = render({ fuse: "x".repeat(256) });
          element = component.find(".Compose-validation");
          expect(element.prop("className")).toContain("Compose-validation--warn");
        });
      });

      describe("over", () => {
        it("should render a validation count", () => {
          component = render({ fuse: "x".repeat(300) });
          element = component.find(".Compose-validation");
          expect(element.text()).toBe("-44");
        });

        it("should look like an error", () => {
          component = render({ fuse: "x".repeat(300) });
          element = component.find(".Compose-validation");
          expect(element.prop("className")).toContain("Compose-validation--over");
        });
      });
    });
  });

  describe("button click", () => {
    it("should trigger onCompose prop passing message & user", () => {
      const onCompose = jest.fn();
      const user = "johnsmith";
      component = render({ fuse: "fuse", user, onCompose });
      const element = component.find(Button);
      element.simulate("click");
      expect(onCompose).toHaveBeenCalledWith({ message: "fuse", user });
    });
  });
});
