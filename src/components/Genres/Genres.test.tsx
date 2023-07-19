import { render, screen } from "@testing-library/react";
import Genres from "./";

describe("Genres", () => {
  test("renders genres", () => {
    const genres = ["Action", "Adventure", "Sci-Fi"];
    render(<Genres genres={genres} />);

    const genreElements = screen.getAllByTestId("genre");
    expect(genreElements).toHaveLength(3);

    genreElements.forEach((element, index) => {
      expect(element).toHaveTextContent(genres[index]);
    });
  });
});
