import { useState } from "react";

const returnInitialState = (storageKey: string): any => {
  try {
    const item = window.localStorage.getItem(storageKey);
    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.error(error);
    return error;
  }
};

const useLocalStorage = (storageKey: string): [any, (value: any) => void] => {
  const [storedValue, setStoredValue] = useState<any>(returnInitialState(storageKey));

  const setValue = (value: any) => {
    try {
      const valueToStore = typeof value === "function" ? value(storedValue) : value;
      window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export { useLocalStorage };
