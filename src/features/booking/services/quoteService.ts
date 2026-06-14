import axios from "axios";
import type { Quote } from "../types/quote";

const API_URL = "http://localhost:3001/api/quotes";

export const createQuote = async (quote: Quote) => {
  const { data } = await axios.post(API_URL, quote);
  return data;
};