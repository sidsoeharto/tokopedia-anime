import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn(),
}));

describe("Pagination", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders pagination with page items", () => {
    const pagination = [1, 2, 3, 4, 5];
    render(
      <Pagination
        pagination={pagination}
        currentPage={3}
        onClick={() => {}}
      />
    );

    const pageItems = screen.getAllByRole("button");
    expect(pageItems).toHaveLength(5);

    pageItems.forEach((item, index) => {
      expect(item).toHaveTextContent((index + 1).toString());
    });
  });

  test("calls onClick handler when page item is clicked", () => {
    const onClickMock = jest.fn();
    const pagination = [1, 2, 3];
    render(
      <Pagination
        pagination={pagination}
        currentPage={2}
        onClick={onClickMock}
      />
    );

    const pageItem = screen.getByText("3");
    fireEvent.click(pageItem);

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith(3);
  });
});
