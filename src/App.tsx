import "./App.css";
import { useState, useEffect } from "react";
import type {
  Procedure,
  SelectedProcedure,
  InsuranceCalculation,
} from "./types";
import proceduresData from "./data/procedures.json";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
