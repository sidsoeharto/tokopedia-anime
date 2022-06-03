/** @jsxImportSource @emotion/react */

import React from "react";
import Routes from "./routes/route";
import { BrowserRouter } from "react-router-dom";
import Context from "./store/Context";
import {Header} from "./components";
import AppColors from "./styles/AppColors";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Context.Provider>
        <BrowserRouter>
          <div css={{backgroundColor: AppColors.gray100}}>
            <div
              css={{
                margin: "0 auto",
                display: "block",
                backgroundColor: "white",
              }}
            >
              <Header />
              <Routes />
            </div>
          </div>
        </BrowserRouter>
      </Context.Provider>
    </ApolloProvider>
  );
}

export default App;