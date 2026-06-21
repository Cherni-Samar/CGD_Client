import { useState } from "react";
import { createQuote, getAvailableSlots } from "../services/quoteService";
import type { Quote } from "../types/quote";

export const useQuote = () => {
  const [loading, setLoading] = useState(false);

  const submitQuote = async (quote: Quote) => {
    setLoading(true);
    try {
      return await createQuote(quote);
    } finally {
      setLoading(false);
    }
  };

  const fetchSlots = async (date: string) => {
    return await getAvailableSlots(date);
  };

  return {
    loading,
    submitQuote,
    fetchSlots,
  };
};