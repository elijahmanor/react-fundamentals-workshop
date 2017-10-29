import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Ads from "./Ads";

describe("Ads", () => {
  let component;

  const render = props => {
    return shallow(<Ads {...props} />);
  };

  beforeEach(() => {
    component = render();
  });

  describe("avatar", () => {
    let element;

    beforeEach(() => {
      component = render();
      element = component.find(".Ads-avatar");
    });

    it("should render an image", () => {
      expect(element.type()).toBe("img");
    });

    it("should have an alt property", () => {
      expect(element.prop("alt")).toBe("egghead.io");
    });
  });

  describe("body", () => {
    let element;

    beforeEach(() => {
      element = component.find(".Ads-body");
    });

    it("should contain ad content", () => {
      expect(element.text()).toBe(
        "High quality, concise web development screencasts. Coding with expert open-source contributors. Let’s make the web better."
      );
    });
  });

  describe("link", () => {
    let element;

    beforeEach(() => {
      element = component.find(".Ads-link");
    });

    it("should render an avatar image", () => {
      expect(element.prop("href")).toBe("https://egghead.io/lessons");
    });

    it("should render an avatar image", () => {
      expect(element.text()).toBe("egghead.io/lessons");
    });
  });
});
