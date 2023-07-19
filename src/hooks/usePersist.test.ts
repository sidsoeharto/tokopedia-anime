import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "./usePersist";

describe("useLocalStorage", () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it("should return initial state from localStorage", () => {
    const key = "testKey";
    const initialValue = { foo: "bar" };
    window.localStorage.setItem(key, JSON.stringify(initialValue));

    const { result } = renderHook(() => useLocalStorage(key));

    expect(result.current[0]).toEqual(initialValue);
  });

  it("should handle error when JSON parsing fails", () => {
    const key = "testKey";
    const invalidValue = "{ foo: bar }";
    window.localStorage.setItem(key, invalidValue);

    renderHook(() => useLocalStorage(key));

    expect(useLocalStorage).toThrowError();
  });

  it("should update stored value when setValue is called", () => {
    const key = "testKey";
    const { result } = renderHook(() => useLocalStorage(key));

    act(() => {
      result.current[1]({ foo: "bar" });
    });

    expect(result.current[0]).toEqual({ foo: "bar" });
    expect(JSON.parse(window.localStorage.getItem(key)!)).toEqual({ foo: "bar" });
  });

  it("should handle error when setValue throws an error", () => {
    const key = "testKey";
    const { result } = renderHook(() => useLocalStorage(key));
  
    const setValueWithError = () => {
      throw new Error("Setting value failed");
    };
  
    act(() => {
      result.current[1](setValueWithError);
    });
  
    expect(useLocalStorage).toThrowError();
    expect(result.current[0]).toBeInstanceOf(Object);
  });
});
