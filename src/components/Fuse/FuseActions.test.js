import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import FuseActions from "./FuseActions";

describe("FuseActions", () => {
  const user = { fullName: "John Smith" };

  beforeEach(() => {});

  it("renders unbombed", () => {
    const tree = renderer.create(<FuseActions id={"1"} user={user} bomb={false} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders bombed", () => {
    const tree = renderer.create(<FuseActions id={"1"} user={user} bomb={true} />);
    expect(tree).toMatchSnapshot();
  });
});
