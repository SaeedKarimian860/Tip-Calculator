import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <Payment />
      <Tip />
      <Tip />
      <Output />
      <Reset />
    </div>
  );
}

function Payment() {
  return (
    <div className="Payment">
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill value" />
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
