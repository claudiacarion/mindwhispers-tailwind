import type { QuoteType } from '../types/Affirmation';

export const GetQuote = async ():Promise<QuoteType> => {
  const response = await fetch('https://dummyjson.com/quotes/random')
  const data = response.json();

  return data;
}