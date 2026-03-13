import React from "react";

function MarketMovers() {

  const gainers = [
    { name: "TATASTEEL", change: "+4.3%" },
    { name: "INFY", change: "+3.1%" },
    { name: "RELIANCE", change: "+2.8%" }
  ];

  const losers = [
    { name: "HDFC", change: "-2.1%" },
    { name: "WIPRO", change: "-1.7%" },
    { name: "ITC", change: "-1.3%" }
  ];

  return (

    <div style={{marginTop:"40px"}}>

      <h2>📈 Top Gainers</h2>

      {gainers.map((stock,index)=>(
        <p key={index}>{stock.name} {stock.change}</p>
      ))}

      <h2>📉 Top Losers</h2>

      {losers.map((stock,index)=>(
        <p key={index}>{stock.name} {stock.change}</p>
      ))}

    </div>

  );
}

export default MarketMovers;