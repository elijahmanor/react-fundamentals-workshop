import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { format, formatDistanceStrict } from "date-fns";
import Fuse from "./Fuse";

jest.mock("date-fns", () => ({
  format: jest.fn(() => "formatted-date"),
  formatDistanceStrict: jest.fn()
}));

describe("Fuse", () => {
  let component;

  const render = props => {
    props = {
      id: "1",
      date: new Date("2017-10-10T10:10:10"),
      userName: "johnsmith",
      fullName: "John Smith",
      avatar: "http://avatar.com/me.png",
      message: "Hello World!",
      bomb: false,
      ...props
    };

    return shallow(<Fuse {...props} />);
  };

  beforeEach(() => {
    const NOW = new Date("2017-10-10T00:00:00");
    global.Date = jest.fn(() => NOW);
  });

  describe("avatar", () => {
    let element;

    beforeEach(() => {
      component = render();
      element = component.find(".Fuse-avatar");
    });

    it("should use fullName as the alt prop", () => {
      expect(element.prop("alt")).toBe("John Smith's Avatar");
    });

    it("should render based on avatar url", () => {
      expect(element.prop("src")).toBe("http://avatar.com/me.png");
    });

    it("should build gravatar based on email if avatar not provided", () => {
      component = render({
        email: "john.smith@gmail.com",
        avatar: null
      });
      element = component.find(".Fuse-avatar");
      expect(element.prop("src")).toBe(
        "https://www.gravatar.com/avatar/1c874909e198bf87d38b50ef7e4d3163"
      );
    });
  });

  describe("fullName", () => {
    it("should render the fullName in the header", () => {
      component = render();
      const element = component.find(".Fuse-fullName");
      expect(element.text()).toBe("John Smith");
    });
  });

  describe("userName", () => {
    it("should render userName in the header", () => {
      component = render();
      const element = component.find(".Fuse-userName");
      expect(element.text()).toBe("@johnsmith");
    });
  });

  describe("date", () => {
    let element;

    beforeEach(() => {
      component = render();
      element = component.find(".Fuse-date");
    });

    it("should have a title with formatted date", () => {
      expect(element.prop("title")).toBe("formatted-date");
    });

    it("should have called formatDistanceStrict to relative format the date", () => {
      expect(formatDistanceStrict).toHaveBeenCalled();
    });
  });

  describe("message", () => {
    it("should render message", () => {
      component = render();
      const element = component.find(".Fuse-message");
      expect(element.text()).toBe("Hello World!");
    });
  });

  describe("FuseActions", () => {
    it("should render FuseActions", () => {
      const source = {
        id: "1",
        user: {},
        bomb: false,
        onBomb() {},
        onReply() {}
      };
      component = render(source);
      const element = component.find("FuseActions");
      expect(element.props()).toMatchObject(source);
    });
  });

  describe("replyingTo", () => {
    let element;

    beforeEach(() => {
      component = render();
      element = component.find(".Fuse-replyingTo");
    });

    it("should not render if replyingTo is not passed as a prop", () => {
      expect(element.length).toBe(0);
    });

    it("should render if replyingTo is passed as a prop", () => {
      component = render({ replyingTo: { userName: "johnsmith" } });
      element = component.find(".Fuse-replyingTo");
      expect(element.length).toBe(1);
    });

    it("should render the replyingTo userName value when provided", () => {
      component = render({ replyingTo: { userName: "johnsmith" } });
      element = component.find(".Fuse-replyingTo");
      expect(element.text()).toBe("Replying to @johnsmith");
    });
  });
});
