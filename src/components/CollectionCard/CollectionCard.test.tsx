import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, useNavigate, NavigateFunction } from "react-router-dom";

import CollectionCard from "./";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("AnimeCard", () => {
  test("renders CollectionCard component", () => {
    const data = {
      id: "1",
      name: "Collection 1",
    };
    render(
      <BrowserRouter>
        <CollectionCard data={data} confirmDelete={() => {}} openEdit={() => {}} />
      </BrowserRouter>
    );
    const collectionName = screen.getByText("Collection 1");
    expect(collectionName).toBeInTheDocument();
  });
});