import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimeCard from "./";
import { BrowserRouter, useNavigate, NavigateFunction } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("AnimeCard", () => {
  const data = {
    id: "1",
    title: {
      english: "Anime 1",
      native: "アニメ1",
    },
    duration: 30,
    coverImage: {
      large: "anime1.jpg",
    },
  };

  const showDeleteButton = true;
  const showDeletePopup = jest.fn();

  test("should render the AnimeCard component", () => {
    render(
      <BrowserRouter>
        <AnimeCard data={data} showDeleteButton={showDeleteButton} showDeletePopup={showDeletePopup} />
      </BrowserRouter>
    );

    expect(screen.getByText("Anime 1")).toBeInTheDocument();
    expect(screen.getByText("30 minutes")).toBeInTheDocument();
  });

  test("should render the AnimeCard component in native title", () => {
    const nativeData = {
      ...data,
      title: {
        native: "アニメ1",
      }
    }
    render(
      <BrowserRouter>
        <AnimeCard data={nativeData} showDeleteButton={showDeleteButton} showDeletePopup={showDeletePopup} />
      </BrowserRouter>
    );

    expect(screen.getByText("アニメ1")).toBeInTheDocument();
    expect(screen.getByText("30 minutes")).toBeInTheDocument();
  });

  test("should invoke the showDeletePopup function on delete button click", () => {
    render(
      <BrowserRouter>
        <AnimeCard data={data} showDeleteButton={showDeleteButton} showDeletePopup={showDeletePopup} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Delete"));

    expect(showDeletePopup).toHaveBeenCalledTimes(1);
  });

  test("should not render the delete button when showDeleteButton prop is false", () => {
    render(
      <BrowserRouter>
        <AnimeCard data={data} showDeleteButton={false} showDeletePopup={showDeletePopup} />
      </BrowserRouter>
    );

    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });

  test("should navigate to anime detail page when clicked on image container", () => {
    (useNavigate() as jest.MockedFunction<() => NavigateFunction>).mockReturnValue(mockedUsedNavigate);

    render(
      <BrowserRouter>
        <AnimeCard data={data} showDeleteButton={showDeleteButton} showDeletePopup={showDeletePopup}/>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByAltText("アニメ1"));

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/anime/1", { state: { title: "Anime Detail" } });
  });
});
