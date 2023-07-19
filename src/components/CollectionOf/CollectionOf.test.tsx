import { render, fireEvent, screen } from "@testing-library/react";
import CollectionOf from "./";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("CollectionOf", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders collection items", () => {
    const collectionOf = [
      { id: "1", name: "Collection 1" },
      { id: "2", name: "Collection 2" },
      { id: "3", name: "Collection 3" },
    ];
    render(<CollectionOf collectionOf={collectionOf} />);

    const collectionItems = screen.getAllByRole("listitem");
    expect(collectionItems).toHaveLength(3);

    collectionItems.forEach((item, index) => {
      expect(item).toHaveTextContent(collectionOf[index].name);
    });
  });

  test("navigates to collection page when item is clicked", () => {
    const collectionOf = [{ id: "1", name: "Collection 1" }];
    render(<CollectionOf collectionOf={collectionOf} />);

    const collectionItem = screen.getByText("Collection 1");
    fireEvent.click(collectionItem);

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/collections/1", {
      state: { title: "Collection 1" },
    });
  });
});
