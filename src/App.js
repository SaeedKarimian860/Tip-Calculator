import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [pay, setPay] = useState("");

  return (
    <div>
      <Payment pay={pay} onSetPay={setPay} />
      <Tip>How did you like the service?</Tip>
      <Tip>How did your friend like the service?</Tip>
      <Output pay={pay} />
      <Reset />
    </div>
  );
}

function Payment({ pay, onSetPay }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={pay}
        onChange={(e) => onSetPay(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ pay }) {
  return <h3>You pay X (${pay} + $B tip)</h3>;
}

function Reset() {
  return <button>Reset</button>;
}
