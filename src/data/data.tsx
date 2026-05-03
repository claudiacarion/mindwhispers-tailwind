import type { QuoteType } from '../types/Quote';

export const GetQuote = async ():Promise<QuoteType> => {
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = response.json();
  
  return data;
}