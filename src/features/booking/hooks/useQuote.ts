import { useState } from "react";
import { createQuote } from "../services/quoteService";
import type { Quote } from "../types/quote";

export const useQuote = () => {
  const [loading, setLoading] = useState(false);

  const submitQuote = async (quote: Quote) => {
    setLoading(true);

    try {
      const result = await createQuote(quote);
      return result;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submitQuote,
  };
};