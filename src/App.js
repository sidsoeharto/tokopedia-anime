/** @jsxImportSource @emotion/react */

import React from "react";
import Routes from "./routes/route";
import { BrowserRouter } from "react-router-dom";
import Context from "./store/Context";
import {Header} from "./components";
import AppColors from "./styles/AppColors";

function App() {
  return (
    <Context.Provider>
      <BrowserRouter>
        <div css={{backgroundColor: AppColors.lightgrey}}>
          <div
            css={{
              // maxWidth: 480,
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
  );
}

export default App;