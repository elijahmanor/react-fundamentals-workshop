import reducer from "./user-reducer";
import * as types from "../actions/user-actions";
import { orderBy } from "lodash";

jest.mock("lodash", () => {
  return { orderBy: jest.fn(x => x) };
});

describe.only("user reducer", () => {
  let _now = Date.now,
    reduction;

  beforeEach(() => {
    Date.now = jest.fn(() => 123456789);
  });

  afterEach(() => {
    Date.now = _now;
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      hasError: false,
      user: undefined,
      lastUpdated: null
    });
  });

  describe("REQUEST_USER", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: false,
          error: "error"
        },
        {
          type: types.REQUEST_USER
        }
      );
    });

    it("should set isFetching to true", () => {
      expect(reduction).toMatchObject({
        isFetching: true
      });
    });

    it("should clear the error property", () => {
      expect(reduction).toMatchObject({
        error: null
      });
    });
  });

  describe("RECEIVE_USER", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: true,
          error: "error",
          user: {},
          lastUpdated: null
        },
        {
          type: types.RECEIVE_USER,
          user: { id: 1, fullName: "John Smith" }
        }
      );
    });

    it("should set isFetching to false", () => {
      expect(reduction).toMatchObject({
        isFetching: false
      });
    });

    it("should clean the error property", () => {
      expect(reduction).toMatchObject({
        error: null
      });
    });

    it("should set the user", () => {
      expect(reduction).toMatchObject({
        user: { id: 1, fullName: "John Smith" }
      });
    });

    it("should set the lastUpdated date", () => {
      expect(reduction).toMatchObject({
        lastUpdated: 123456789
      });
    });
  });

  describe("ERROR_USER", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: true,
          error: null
        },
        {
          type: types.ERROR_USER,
          error: "error"
        }
      );
    });

    it("should set isFetching to false", () => {
      expect(reduction).toMatchObject({
        isFetching: false
      });
    });

    it("should set the error property", () => {
      expect(reduction).toMatchObject({
        error: "error"
      });
    });
  });
});
