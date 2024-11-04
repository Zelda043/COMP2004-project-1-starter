import { useState } from "react";

export default function QuantityCounter({ counter, setCounter }) {
  return (
    <div className="counter-container">
      {/* Increments the counter, ensuring it does not decrease below zero */}
      <button onClick={() => setCounter(counter >= 0 ? counter + 1 : counter)}>
        +
      </button>
      {/* Displays the current counter value */}
      <span>{counter}</span>
      {/* Decrements the counter but prevents it from going below zero */}
      <button onClick={() => setCounter(counter <= 0 ? counter : counter - 1)}>
        -
      </button>
    </div>
  );
}
