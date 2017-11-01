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
      // console.log("---component---", component.debug());
      element = component.find("ReactModal");
      // console.log("---element---", element.debug());
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
        console.log("element", element.html());
      });

      it("should have the correct text", () => {
        expect(element.text()).toBe("Compose New Fuse");
      });

      it("should have a button", () => {
        expect(element.find(".Compose-close").type()).toBe("button");
      });
    });

    it("should use fullName as the alt prop", () => {
      expect(element.prop("alt")).toBe("John Smith's Avatar");
    });
  });

  describe("fullName", () => {
    it("should render the fullName in the header", () => {
      component = render();
      const element = component.find(".Fuse-fullName");
      expect(element.text()).toBe("John Smith");
    });
  });
});
