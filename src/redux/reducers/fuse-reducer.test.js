import reducer from "./fuse-reducer";
import * as types from "../actions/fuse-actions";
import { orderBy } from "lodash";

jest.mock("lodash", () => {
  return { orderBy: jest.fn(x => x) };
});

describe("fuse reducer", () => {
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
      fuses: [],
      lastUpdated: null
    });
  });

  describe("REQUEST_FUSES", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: false,
          error: "error"
        },
        {
          type: types.REQUEST_FUSES
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

  describe("RECEIVE_FUSES", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: true,
          error: "error",
          fuses: [],
          lastUpdated: null
        },
        {
          type: types.RECEIVE_FUSES,
          fuses: ["fuse1", "fuse2", "fuse3"]
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

    it("should set the fuses", () => {
      expect(reduction).toMatchObject({
        fuses: ["fuse1", "fuse2", "fuse3"]
      });
    });

    it("should sort the fuses", () => {
      expect(orderBy).toHaveBeenCalled();
    });

    it("should set the lastUpdated date", () => {
      expect(reduction).toMatchObject({
        lastUpdated: 123456789
      });
    });
  });

  describe("UPDATE_FUSE", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: true,
          error: "error",
          fuses: [
            { id: 1, message: "fuse1" },
            { id: 42, message: "fuse42" },
            { id: 99, message: "fuse99" }
          ],
          lastUpdated: null
        },
        {
          type: types.UPDATE_FUSE,
          fuse: { id: 42, message: "updated-fuse42" }
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

    it("should update the fuses", () => {
      expect(reduction).toMatchObject({
        fuses: [
          { id: 1, message: "fuse1" },
          { id: 42, message: "updated-fuse42" },
          { id: 99, message: "fuse99" }
        ]
      });
    });

    it("should sort the fuses", () => {
      expect(orderBy).toHaveBeenCalled();
    });

    it("should set the lastUpdated date", () => {
      expect(reduction).toMatchObject({
        lastUpdated: 123456789
      });
    });
  });

  describe("ADD_FUSE", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: true,
          error: "error",
          fuses: [
            { id: 1, message: "fuse1" },
            { id: 42, message: "fuse42" },
            { id: 99, message: "fuse99" }
          ],
          lastUpdated: null
        },
        {
          type: types.ADD_FUSE,
          fuse: { id: 1337, message: "fuse1337" }
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

    it("should update the fuses", () => {
      expect(reduction).toMatchObject({
        fuses: [
          { id: 1, message: "fuse1" },
          { id: 42, message: "fuse42" },
          { id: 99, message: "fuse99" },
          { id: 1337, message: "fuse1337" }
        ]
      });
    });

    it("should sort the fuses", () => {
      expect(orderBy).toHaveBeenCalled();
    });

    it("should set the lastUpdated date", () => {
      expect(reduction).toMatchObject({
        lastUpdated: 123456789
      });
    });
  });

  describe("ERROR_FUSE", () => {
    beforeEach(() => {
      reduction = reducer(
        {
          isFetching: true,
          error: null
        },
        {
          type: types.ERROR_FUSE,
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
