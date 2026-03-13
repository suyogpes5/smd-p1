import React, { useState, useEffect } from "react";

function Watchlist({ symbol }) {

  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setList(saved);
  }, []);

  const addStock = () => {

    if (!symbol) return;

    const updated = [...list, symbol];

    setList(updated);

    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="watchlist">

      <button onClick={addStock}>Add to Watchlist ⭐</button>

      <h3>My Watchlist</h3>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default Watchlist;