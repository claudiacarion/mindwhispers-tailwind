import './App.css'
import Header from './components/Header'
import QuoteDisplay from './components/QuoteDisplay'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-[url(/bg-light.jpg)] bg-cover dark:bg-[url(/bg-dark.jpg)] flex flex-col min-h-full">
      <Header />
      <div className="grow">
        <QuoteDisplay />
      </div>
      <Footer />
    </div>
  )
}

export default App
