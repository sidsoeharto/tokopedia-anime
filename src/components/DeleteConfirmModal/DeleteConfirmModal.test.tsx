import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteConfirmModal from "./";

describe("DeleteConfirmModal", () => {
  const mockOnRequestClose = jest.fn();
  const mockOnDelete = jest.fn();

  it("should renders modal with correct title and content", () => {
    render(
      <DeleteConfirmModal
        isOpen={true}
        name="Collection Name"
        onRequestClose={mockOnRequestClose}
        onDelete={mockOnDelete}
      />
    );

    const modalTitle = screen.getByText("Delete Collection Item");
    const modalContent = screen.getByText(
      "Are you sure you want to delete Collection Name?"
    );
    
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  it("should calls onRequestClose when Cancel button is clicked", () => {
    render(
      <DeleteConfirmModal
        isOpen={true}
        name="Collection Name"
        onRequestClose={mockOnRequestClose}
        onDelete={mockOnDelete}
      />
    );
    
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelButton);

    expect(mockOnRequestClose).toHaveBeenCalledTimes(1);
  });

  it("should calls onDelete with correct name when Yes button is clicked", () => {
    render(
      <DeleteConfirmModal
        isOpen={true}
        name="Collection Name"
        onRequestClose={mockOnRequestClose}
        onDelete={mockOnDelete}
      />
    );
    const deleteButton = screen.getByRole("button", { name: "Save" });

    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
