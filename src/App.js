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
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const percentage = pay * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setPay("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Payment pay={pay} onSetPay={setPay} />
      <Tip tip={tip1} onSelect={setTip1}>
        How did you like the service?
      </Tip>
      <Tip tip={tip2} onSelect={setTip2}>
        How did your friend like the service?
      </Tip>

      {pay > 0 && (
        <>
          <Output pay={pay} percentage={percentage} />
          <Reset onReset={handleReset} />
        </>
      )}
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

function Tip({ children, tip, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ pay, percentage }) {
  return (
    <h3>
      You pay ${pay + percentage} (${pay} + ${percentage} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
