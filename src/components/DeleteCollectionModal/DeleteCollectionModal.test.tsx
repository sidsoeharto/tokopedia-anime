import { render, screen, fireEvent } from "@testing-library/react";
import DeleteCollectionModal from "./DeleteCollectionModal.component";

describe("DeleteCollectionModal", () => {
  const mockOnRequestClose = jest.fn();
  const mockOnDelete = jest.fn();

  test("renders modal with correct title and content", () => {
    render(
      <DeleteCollectionModal
        isOpen={true}
        name="Collection Name"
        onRequestClose={mockOnRequestClose}
        onDelete={mockOnDelete}
      />
    );

    const modalTitle = screen.getByText("Delete Collection");
    const modalContent = screen.getByText("Are you sure you want to delete Collection Name?");
    
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  test("calls onRequestClose when Cancel button is clicked", () => {
    render(
      <DeleteCollectionModal
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

  test("calls onDelete with correct name when Yes button is clicked", () => {
    render(
      <DeleteCollectionModal
        isOpen={true}
        name="Collection Name"
        onRequestClose={mockOnRequestClose}
        onDelete={mockOnDelete}
      />
    );

    const deleteButton = screen.getByRole("button", { name: "Save" });
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith("Collection Name");
  });
});
