import React, { useEffect } from "react";

function TradingViewChart({ symbol }) {

  useEffect(() => {

    const script = document.createElement("script");

    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true
    });

    document.getElementById("tradingview_container").appendChild(script);

  }, [symbol]);

  return (
    <div>
      <h2>📈 Advanced Chart</h2>

      <div className="tradingview-widget-container">
        <div id="tradingview_container" style={{ height: "500px" }}></div>
      </div>
    </div>
  );
}

export default TradingViewChart;