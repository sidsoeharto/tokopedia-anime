import { render } from "@testing-library/react";
import AddToCollectionModal from "./";

describe("AddToCollectionModal Component", () => {
  it("renders without errors", () => {
    render(<AddToCollectionModal isOpen={true} onRequestClose={() => {}} data={{ id: "1" }} />);
  });

  // Add more test cases as needed
});
