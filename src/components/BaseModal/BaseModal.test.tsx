import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BaseModal from "./";

describe("BaseModal", () => {
  const title = "My Modal";
  const content = <div>Modal content</div>;
  test("renders modal with title and content", () => {
    render(
      <BaseModal
        isOpen={true}
        onRequestClose={() => {}}
        onSave={() => {}}
        title={title}
        renderContent={() => content}
      />
    );

    const modalTitle = screen.getByText(title);
    expect(modalTitle).toBeInTheDocument();

    const modalContent = screen.getByText("Modal content");
    expect(modalContent).toBeInTheDocument();
  });

  test("calls onRequestClose when cancel button is clicked", () => {
    const onRequestClose = jest.fn();
    render(
      <BaseModal
        isOpen={true}
        onRequestClose={onRequestClose}
        onSave={() => {}}
        title="My Modal"
        renderContent={() => content}
      />
    );

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });

  test("calls onSave when save button is clicked", () => {
    const onSave = jest.fn();
    render(
      <BaseModal
        isOpen={true}
        onRequestClose={() => {}}
        onSave={onSave}
        title="My Modal"
        renderContent={() => content}
      />
    );

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
