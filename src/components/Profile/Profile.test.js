import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Icon from "../Icon/Icon";
import Profile from "./Profile";

describe("Profile", () => {
  let component;

  const render = props => {
    props = {
      user: {
        thumbnailUrl: "http://me.png",
        name: { formatted: "John Smith" },
        displayName: "John Smith",
        preferredUsername: "johnsmith",
        aboutMe: "Hello, World!"
      },
      ...props
    };
    return shallow(<Profile {...props} />);
  };

  beforeEach(() => {
    component = render();
  });

  describe("reset", () => {
    let reset, onReset;

    beforeEach(() => {
      onReset = jest.fn();
      component = render({ onReset });
      reset = component.find(".Profile-reset");
    });

    it("should render a reset icon", () => {
      expect(reset).toBePresent();
    });

    it("should trigger onReset when clicked", () => {
      reset.simulate("click");
      expect(onReset).toBeCalled();
    });
  });

  describe("avatar", () => {
    let avatar;

    beforeEach(() => {
      avatar = component.find(".Profile-avatar");
    });

    it("should render an avatar image", () => {
      expect(avatar.prop("src")).toBe("http://me.png");
    });

    it("should have alt text", () => {
      expect(avatar.prop("alt")).toBe("John Smith");
    });
  });

  describe("name", () => {
    it("should render fullName", () => {
      const fullName = component.find(".Profile-fullName");
      expect(fullName.text()).toBe("John Smith");
    });

    it("should render userName", () => {
      const userName = component.find(".Profile-userName");
      expect(userName.text()).toBe("@johnsmith");
    });
  });

  it("should render bio", () => {
    const bio = component.find(".Profile-bio");
    expect(bio.html()).toBe(`<div class="Profile-bio">Hello, World!</div>`);
  });
});
