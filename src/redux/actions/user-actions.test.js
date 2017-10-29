import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./user-actions";
import { getUser, promptUser } from "../../services/user";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../services/user", () => {
  return {
    getUser: jest.fn(() => Promise.resolve("user")),
    promptUser: jest.fn(() => Promise.resolve("user"))
  };
});

describe("user-actions", () => {
  it("should create an action to request user", () => {
    const expectedAction = {
      type: actions.REQUEST_USER
    };
    expect(actions.requestUser()).toEqual(expectedAction);
  });

  it("should create an action to error user", () => {
    const error = "This is an error";
    const expectedAction = {
      type: actions.ERROR_USER,
      error
    };
    expect(actions.errorUser(error)).toEqual(expectedAction);
  });

  it("should create an action to receive user", () => {
    const user = "user";
    const expectedAction = {
      type: actions.RECEIVE_USER,
      user
    };
    expect(actions.receiveUser(user)).toEqual(expectedAction);
  });

  describe("fetchUser", () => {
    it("should create REQUEST_USER", () => {
      const store = mockStore({});
      return store.dispatch(actions.fetchUser()).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.REQUEST_USER });
      });
    });

    it("should invoke getUser service method", () => {
      const store = mockStore({});
      return store.dispatch(actions.fetchUser()).then(() => {
        expect(getUser).toHaveBeenCalled();
      });
    });

    it("should create RECEIVE_USER on success", () => {
      const store = mockStore({});
      return store.dispatch(actions.fetchUser()).then(() => {
        expect(store.getActions()).toContainEqual({
          type: actions.RECEIVE_USER,
          user: "user"
        });
      });
    });

    it("should create ERROR_USER on error", () => {
      const store = mockStore({});
      getUser.mockImplementation(() => Promise.reject("error"));
      return store.dispatch(actions.fetchUser()).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.ERROR_USER, error: "error" });
      });
    });
  });

  describe("resetUser", () => {
    it("should create REQUEST_USER", () => {
      const store = mockStore({});
      return store.dispatch(actions.resetUser()).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.REQUEST_USER });
      });
    });

    it("should invoke promptUser service method", () => {
      const store = mockStore({});
      return store.dispatch(actions.resetUser()).then(() => {
        expect(promptUser).toHaveBeenCalled();
      });
    });

    it("should create RECEIVE_USER on success", () => {
      const store = mockStore({});
      return store.dispatch(actions.resetUser()).then(() => {
        expect(store.getActions()).toContainEqual({
          type: actions.RECEIVE_USER,
          user: "user"
        });
      });
    });

    it("should create ERROR_USER on error", () => {
      const store = mockStore({});
      promptUser.mockImplementation(() => Promise.reject("error"));
      return store.dispatch(actions.resetUser()).then(() => {
        expect(store.getActions()).toContainEqual({ type: actions.ERROR_USER, error: "error" });
      });
    });
  });
});
