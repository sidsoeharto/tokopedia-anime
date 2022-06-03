import { createRoot } from 'react-dom/client';
import App from './App';
import renderer from "react-test-renderer";
import { render, cleanup, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import AppRouter from "./routes/route";
import { BrowserRouter } from "react-router-dom";
import Context from './store/Context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Header from './components/Header';

afterEach(cleanup);

test('renders app', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App />);
  root.unmount(div);
});

describe('Render Animelist Application', () => {
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache()
  });

  it('should render initial page', () => {
    const tree = renderer.create(
      <ApolloProvider client={client}>
        <Context.Provider>
          <BrowserRouter>
            <Header />
            <AppRouter />
          </BrowserRouter>
        </Context.Provider>
      </ApolloProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

