import React, { useEffect, useState } from "react";
import axios from "axios";

function MarketNews() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    const fetchNews = async () => {
      try {

        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=ad6b48d649c241e782bb4e9f5ba318ee"
        );

        setNews(response.data.articles);

      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();

  }, []);

  return (

    <div style={{marginTop:"40px"}}>

      <h2>📰 Market News</h2>

      {news.slice(0,5).map((article, index) => (

        <div key={index} style={{marginBottom:"10px"}}>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            {article.title}
          </a>

        </div>

      ))}

    </div>

  );
}

export default MarketNews;