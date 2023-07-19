import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AppInput from "./";

describe("AppInput", () => {
  const label = "Username";
  const placeholder = "Enter your username";
  test("renders input with label and placeholder", () => {
    
    const onChangeText = jest.fn();
    render(
      <AppInput
        label={label}
        value=""
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    );

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", placeholder);

    const inputPlaceholder = screen.getByPlaceholderText(placeholder);
    expect(inputPlaceholder).toBeInTheDocument();
  });

  test("calls onChangeText handler when input value changes", () => {
    const onChangeText = jest.fn();
    render(
      <AppInput
        label="Username"
        value=""
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    );

    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: "john.doe" } });

    expect(onChangeText).toHaveBeenCalledTimes(1);
    expect(onChangeText).toHaveBeenCalledWith("john.doe");
  });

  test("renders input with error text", () => {
    const errorText = "Invalid input";
    render(
      <AppInput
        label="Username"
        value=""
        placeholder="Enter your username"
        onChangeText={() => {}}
        errorText={errorText}
      />
    );

    const errorElement = screen.getByText(errorText);
    expect(errorElement).toBeInTheDocument();
  });
});
