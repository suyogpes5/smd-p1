import React, { useState } from "react";

import StockSearch from "../components/StockSearch";
import StockCard from "../components/StockCard";
import StockChart from "../components/StockChart";
import MarketNews from "../components/MarketNews";
import MarketMovers from "../components/MarketMovers";
import Watchlist from "../components/Watchlist";

function Dashboard() {

  const [symbol, setSymbol] = useState("AAPL");

  return (
    <div className="container">

      <div className="header">📊 Stock Market Dashboard</div>

      <div className="card">
        <StockSearch setSymbol={setSymbol} />
      </div>

      <div className="card">
        <StockCard symbol={symbol} />
      </div>

      <div className="card">
        <StockChart symbol={symbol} />
      </div>

      <div className="card">
        <MarketMovers />
      </div>

      <div className="card">
        <MarketNews />
      </div>

      <div className="card">
        <Watchlist />
      </div>

    </div>
  );
}

export default Dashboard;