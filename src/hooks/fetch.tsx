type QuoteType = {
  slip: {
    advice: string
  }
}

export const GetQuote = async (): Promise<string> => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data: QuoteType = await response.json();
  
  return data.slip.advice;
};
