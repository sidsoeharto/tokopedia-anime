import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import AddCollectionModal from "./";
import { addCollection } from "../../store/actions";
import Context from "../../store/Context";

describe("AddCollectionModal", () => {
  it("should render properly", () => {
    render(<AddCollectionModal isOpen={true} onRequestClose={() => {}} />);

    expect(screen.getByText("Add Collection Modal")).toBeInTheDocument();
    expect(screen.getByText("Collection Name")).toBeInTheDocument();
  });

  it("should show an error when adding a collection with special characters", () => {
    const mockDispatch = jest.fn();
    const mockClose = jest.fn();
    const collectionName = "Invalid # Collection";

    render(
      <Context.Provider>
        <AddCollectionModal isOpen={true} onRequestClose={mockClose} />
      </Context.Provider>
    );

    const inputElement = screen.getByPlaceholderText("Enter collection name");
    fireEvent.change(inputElement, { target: { value: collectionName } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockClose).not.toHaveBeenCalled();
    expect(screen.getByText("Can't use special characters")).toBeInTheDocument();
  });
});