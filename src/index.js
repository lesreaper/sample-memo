import React from "react";
import ReactDOM from "react-dom";

import { DataProvider } from "./DataContext";
import { ItemList } from "./ItemList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <ItemList />
      </DataProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
