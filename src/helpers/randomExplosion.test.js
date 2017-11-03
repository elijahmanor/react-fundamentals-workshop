import React, { Component } from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Sound from "react-sound";
import randomExplosion from "./randomExplosion";
import { random } from "lodash";

jest.mock("react-sound", () => () => <div>SOUND</div>);
jest.mock("lodash", () => {
  return {
    random: jest.fn(() => 25)
  };
});

describe("randomExplosion", () => {
  const BasicComponent = () => <div />;
  const AdvancedComponent = randomExplosion(BasicComponent);

  const render = props => {
    return shallow(<AdvancedComponent {...props} />);
  };

  it("should not explode at first", () => {
    const component = render();

    expect(component.state("isExploding")).toBe(false);
  });

  it("should trigger parent onClick when child is clicked", () => {
    const onClick = jest.fn();
    const component = render({ onClick });
    component.simulate("click");
    expect(onClick).toBeCalled();
  });

  it("should not explode when rand is less than 50", () => {
    const onClick = jest.fn();
    const component = render();
    component.simulate("click");
    expect(component.find(Sound).length).toBe(0);
  });

  it("should explode when rand is over 49", () => {
    random.mockImplementation(jest.fn(() => 75));
    const onClick = jest.fn();
    const component = render({ onClick });
    component.simulate("click");
    expect(component.find(Sound).length).toBe(1);
  });
});
