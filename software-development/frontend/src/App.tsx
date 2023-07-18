import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./themes";
import { CircularProgress } from "@mui/material";

function App() {
  return (
    //TODO: Hook theming up to redux so that it selects
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <p>hi</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
