import React from "react";

function StockCard({ stock }) {

  if (!stock) return null;

  return (
    <div className="card">

      <h2>{stock["01. symbol"]}</h2>

      <p>Price: ${stock["05. price"]}</p>

      <p>Change: {stock["10. change percent"]}</p>

    </div>
  );
}

export default StockCard;