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
      <Tip>How did you like the service?</Tip>
      <Tip>How did your friend like the service?</Tip>
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

function Tip({children}) {
  return (
    <div>
        <label>{children}</label>
     <select>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
     </select>
    </div>
  );
}

function Output() {
    return (
        <h3>You pay X ($A + $B tip)</h3>
    )
}

function Reset() {
    return (
        <button>Reset</button>
    )
}
