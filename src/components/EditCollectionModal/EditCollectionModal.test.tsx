import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { updateCollection } from "../../store/actions";
import EditCollectionModal from "./";

jest
  .mock("../../store/actions", () => ({
    updateCollection: jest.fn(),
  }))
;

describe("EditCollectionModal", () => {
  test("renders modal with collection name input", () => {
    const data = { id: "1", name: "Collection 1" };
    render(
      <EditCollectionModal
        isOpen={true}
        onRequestClose={() => {}}
        data={data}
      />
    );

    const collectionNameInput = screen.getByPlaceholderText("Enter collection name");
    expect(collectionNameInput).toBeInTheDocument();
    expect(collectionNameInput).toHaveValue("Collection 1");
  });

  test("updates collection name on input change", () => {
    const data = { id: "1", name: "Collection 1" };
    render(
      <EditCollectionModal
        isOpen={true}
        onRequestClose={() => {}}
        data={data}
      />
    );

    const collectionNameInput = screen.getByPlaceholderText("Enter collection name");
    fireEvent.change(collectionNameInput, { target: { value: "Updated Name" } });

    expect(collectionNameInput).toHaveValue("Updated Name");
  });

  xtest("calls updateCollection and closes modal on save", () => {
    const data = { id: "1", name: "Collection 2" };
    const onRequestCloseMock = jest.fn();
    render(
      <EditCollectionModal
        isOpen={true}
        onRequestClose={onRequestCloseMock}
        data={data}
      />
    );

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(updateCollection).toHaveBeenCalledTimes(1);
    expect(updateCollection).toHaveBeenCalledWith({
      id: "1",
      name: "Updated Name",
    });
    expect(onRequestCloseMock).toHaveBeenCalledTimes(1);
  });
});
