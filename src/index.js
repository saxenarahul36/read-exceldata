import React from "react";
import ReactDOM from "react-dom";
import ExcelDataTable from "./excelTable";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Import Excel data into grid view</h1>
      <ExcelDataTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
