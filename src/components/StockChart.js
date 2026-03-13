import React, { useEffect, useRef } from "react";

function TradingViewChart({ symbol }) {

  const chartRef = useRef();

  useEffect(() => {

    const script = document.createElement("script");

    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {

      new window.TradingView.widget({
        container_id: chartRef.current.id,
        width: "100%",
        height: 400,
        symbol: symbol || "NASDAQ:AAPL",
        interval: "D",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        allow_symbol_change: true
      });

    };

    document.body.appendChild(script);

  }, [symbol]);

  return (
    <div id="tradingview_chart" ref={chartRef}></div>
  );
}

export default TradingViewChart;