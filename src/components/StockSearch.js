import React, { useState } from "react";

function StockSearch({ setSymbol }) {

  const [input, setInput] = useState("");

  const searchStock = () => {
    if (input) {
      setSymbol(input.toUpperCase());
      setInput("");
    }
  };

  return (
    <div>
      <h3>🔎 Search Stock</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="AAPL, TSLA, RELIANCE..."
      />

      <button onClick={searchStock}>Search</button>
    </div>
  );
}

export default StockSearch;