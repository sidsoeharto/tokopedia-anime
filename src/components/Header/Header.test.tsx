import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockImplementation(() => {
    return { pathname: "/testroute" };
  }),
  useNavigate: jest.fn(),
}));

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn(),
}));

interface MockProps {
  title: string
}

describe("Header", () => {
  const mockLocation = {
    state: null,
    key: '1',
    pathname: '/',
    search: '',
    hash: '',
  }
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders header with title", () => {
    (useLocation as jest.MockedFunction<() => Location>).mockReturnValueOnce(mockLocation);
    render(<Header />);

    const titleElement = screen.getByText("AnimeList");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders header with back icon and navigates back when clicked", () => {
    const updatedMockLocation = {
      ...mockLocation,
      pathname: '/collections'
    }
    const mockNavigate = jest.fn();
    (useLocation as jest.MockedFunction<() => Location>).mockReturnValueOnce(updatedMockLocation);
    (useNavigate as jest.MockedFunction<() => NavigateFunction>).mockReturnValueOnce(mockNavigate);
    render(<Header />);

    const backIcon = screen.getByTestId("back-icon");
    fireEvent.click(backIcon);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test("renders header with collections button and navigates to collections page", () => {
    const mockNavigate = jest.fn();
    (useLocation as jest.MockedFunction<() => Location>).mockReturnValueOnce(mockLocation);
    (useNavigate as jest.MockedFunction<() => NavigateFunction>).mockReturnValueOnce(mockNavigate);
    render(<Header />);

    const collectionsButton = screen.getByText("Collections");
    expect(collectionsButton).toBeInTheDocument();

    fireEvent.click(collectionsButton);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/collections", {
      state: { title: "Collection List" },
    });
  });
});
