import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./fuse-actions";
import { getFuses, updateFuse, addFuse } from "../../services/fuse";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../services/fuse", () => {
  return {
    getFuses: jest.fn(() => Promise.resolve(["fuse1", "fuse2", "fuse3"])),
    updateFuse: jest.fn(() => Promise.resolve("fuse")),
    addFuse: jest.fn(() => Promise.resolve("fuse"))
  };
});

describe("fuse-actions", () => {
  it("should create an action to request fuses", () => {
    const expectedAction = {
      type: actions.REQUEST_FUSES
    };
    expect(actions.requestFuses()).toEqual(expectedAction);
  });

  it("should create an action to error fuses", () => {
    const error = "This is an error";
    const expectedAction = {
      type: actions.ERROR_FUSE,
      error
    };
    expect(actions.errorFuse(error)).toEqual(expectedAction);
  });

  it("should create an action to receive fuses", () => {
    const fuses = ["fuse1", "fuse2", "fuse3"];
    const expectedAction = {
      type: actions.RECEIVE_FUSES,
      fuses
    };
    expect(actions.receiveFuses(fuses)).toEqual(expectedAction);
  });

  it("should create an action to update fuse", () => {
    const fuse = "fuse";
    const expectedAction = {
      type: actions.UPDATE_FUSE,
      fuse
    };
    expect(actions.updateFuse(fuse)).toEqual(expectedAction);
  });

  it("should create an action to add fuse", () => {
    const fuse = "fuse";
    const expectedAction = {
      type: actions.ADD_FUSE,
      fuse
    };
    expect(actions.addFuse(fuse)).toEqual(expectedAction);
  });

  describe("fetchFuses", () => {
    it("should create REQUEST_FUSES", () => {
      const store = mockStore({});
      return store.dispatch(actions.fetchFuses()).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.REQUEST_FUSES });
      });
    });

    it("should create RECEIVE_FUSES on success", () => {
      const store = mockStore({});
      return store.dispatch(actions.fetchFuses()).then(() => {
        expect(store.getActions()).toContainEqual({
          type: actions.RECEIVE_FUSES,
          fuses: ["fuse1", "fuse2", "fuse3"]
        });
      });
    });

    it("should create ERROR_FUSE on error", () => {
      const store = mockStore({});
      getFuses.mockImplementation(() => Promise.reject("error"));
      return store.dispatch(actions.fetchFuses()).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.ERROR_FUSE, error: "error" });
      });
    });
  });

  describe("putFuse", () => {
    const fuse = "fuse";

    it("should create REQUEST_FUSES", () => {
      const store = mockStore({});
      return store.dispatch(actions.putFuse(fuse)).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.REQUEST_FUSES });
      });
    });

    it("should create UPDATE_FUSE on success", () => {
      const store = mockStore({ fuses: [] });
      return store.dispatch(actions.putFuse(fuse)).then(() => {
        expect(store.getActions()).toContainEqual({
          type: actions.UPDATE_FUSE,
          fuse
        });
      });
    });

    it("should create ERROR_FUSE on error", () => {
      const store = mockStore({ fuses: [] });
      updateFuse.mockImplementation(() => Promise.reject("error"));
      return store.dispatch(actions.putFuse(fuse)).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.ERROR_FUSE, error: "error" });
      });
    });
  });

  describe("postFuse", () => {
    const fuse = "fuse";

    it("should create REQUEST_FUSES", () => {
      const store = mockStore({});
      return store.dispatch(actions.postFuse(fuse)).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.REQUEST_FUSES });
      });
    });

    it("should create ADD_FUSE on success", () => {
      const store = mockStore({});
      return store.dispatch(actions.postFuse(fuse)).then(() => {
        expect(store.getActions()).toContainEqual({
          type: actions.ADD_FUSE,
          fuse
        });
      });
    });

    it("should create ERROR_FUSE on error", () => {
      const store = mockStore({ fuses: [] });
      addFuse.mockImplementation(() => Promise.reject("error"));
      return store.dispatch(actions.putFuse(fuse)).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.ERROR_FUSE, error: "error" });
      });
    });
  });
});
