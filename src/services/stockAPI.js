import axios from "axios";

const API_KEY = "ad6b48d649c241e782bb4e9f5ba318ee";

const BASE_URL = "https://api.twelvedata.com";


// GET STOCK PRICE
export const getStockPrice = async (symbol) => {
  try {

    const response = await axios.get(`${BASE_URL}/quote`, {
      params: {
        symbol: symbol,
        apikey: API_KEY
      }
    });

    return response.data;

  } catch (error) {
    console.error(error);
    return null;
  }
};


// SEARCH STOCKS
export const searchStocks = async (keyword) => {

  try {

    const response = await axios.get(`${BASE_URL}/symbol_search`, {
      params: {
        symbol: keyword,
        apikey: API_KEY
      }
    });

    return response.data.data;

  } catch (error) {
    console.error(error);
    return [];
  }

};