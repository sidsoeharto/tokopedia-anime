import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AppButton from "./AppButton.component";

describe("AppButton", () => {
  const title = "Click me";
  const onClick = jest.fn();

  test("renders button with title", () => {  
    render(<AppButton title={title} onClick={onClick} />);

    const button = screen.getByTestId("app-button");
    expect(button).toBeInTheDocument();

    const buttonTitle = screen.getByText(title);
    expect(buttonTitle).toBeInTheDocument();
  });

  test("calls onClick handler when button is clicked", () => {
    const onClick = jest.fn();
    render(<AppButton onClick={onClick} />);

    const button = screen.getByTestId("app-button");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("renders button with custom class name", () => {
    const className = "custom-button";
    render(<AppButton className={className} onClick={onClick} />);

    const button = screen.getByTestId("app-button");
    expect(button).toHaveClass(className);
  });

  test("renders button with icon", () => {
    const icon: React.ReactNode = <i className="fa fa-plus" data-testid="test-icon"/>;
    render(<AppButton icon={icon} onClick={onClick} />);

    const button = screen.getByTestId("app-button");
    expect(button).toBeInTheDocument();

    const iconElement = screen.getByTestId("test-icon");
    expect(iconElement).toBeInTheDocument();
  });
});