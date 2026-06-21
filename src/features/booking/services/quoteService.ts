import axios from "axios";
import type { Quote } from "../types/quote";

const API_URL = "http://localhost:3001/api/quotes";

export const createQuote = async (quote: Quote) => {
  const { data } = await axios.post(API_URL, quote);
  return data;
};

// 🔥 NEW: get available slots
export const getAvailableSlots = async (date: string) => {
  const { data } = await axios.get(
    `${API_URL}/available-slots/${date}`
  );
  return data as string[];
};