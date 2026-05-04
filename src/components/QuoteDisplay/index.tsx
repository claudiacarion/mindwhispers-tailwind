import { useState } from 'react';
import { GetQuote } from '../../data/data'

const QuoteDisplay = () => {
  const [quote, setQuote] = useState<string>();

  const handleClick = async () => {
    const response = await GetQuote();
    setQuote(response)
  }

  return (
    <div className='p-4 text-center'>
      <div className="min-w-80 h-80 md:h-50 p-4 my-4 rounded-4xl flex justify-center items-center">
        {quote ? <p className="text-amber-950 text-3xl dark:text-highlight">{quote}</p> : <p className="text-amber-950 text-xl dark:text-highlight">What do you need to hear?</p>}
      </div>
      <button onClick={handleClick} className="bg-primary opacity-90 p-4 rounded-4xl shadow-lg shadow-primary/50 cursor-pointer">Inspire Me</button>
    </div>
  )
}

export default QuoteDisplay