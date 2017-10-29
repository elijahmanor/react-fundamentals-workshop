import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Footer from "./Footer";

describe("Footer", () => {
  let component;

  const render = props => {
    return shallow(<Footer {...props} />);
  };

  beforeEach(() => {
    component = render();
  });

  describe("website", () => {
    let element;

    beforeEach(() => {
      element = component.find(".Footer-website a");
    });

    it("should render website", () => {
      expect(element.prop("href")).toBe("http://elijahmanor.com");
    });

    it("should render website", () => {
      expect(element.text()).toBe("elijahmanor.com");
    });
  });

  describe("twitter", () => {
    let element;

    beforeEach(() => {
      element = component.find(".Footer-twitter a");
    });

    it("should render website", () => {
      expect(element.prop("href")).toBe("http://twitter.com/elijahmanor");
    });

    it("should render website", () => {
      expect(element.text()).toBe("@elijahmanor");
    });
  });

  it("should render copyright", () => {
    const element = component.find(".Footer-copyright");
    expect(element.text()).toBe("© 2017");
  });
});
