import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
      <Payment />
      <Tip />
      <Output />
      <Reset />
    </div>
  );
}

function TipCalculator() {}

function Payment() {
  return (
    <div className="Payment">
      <p>
        How much was the bill?
        <span>
          <input type="text" />
        </span>
      </p>
    </div>
  );
}

function Tip() {
  return (
    <div className="Tip1">
      <p>
        How did you like the service?
        <span>
          <select>
            <option value="10%">It was good (10%)</option>
            <option value="20%">It was great (20%)</option>
            <option value="30%">It was amazing (30%)</option>
          </select>
        </span>
      </p>
    </div>
  );
}

function Output() {}

function Reset() {}
