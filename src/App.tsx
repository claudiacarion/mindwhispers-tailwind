import './App.css'
import Header from './assets/components/Header'
import AffirmationDisplay from './assets/components/AffirmationDisplay'
import Footer from './assets/components/Footer'

function App() {

  return (
    <div className="bg-[url(/bg-light.jpg)] bg-cover dark:bg-[url(/bg-dark.jpg)] flex flex-col min-h-full">
      <Header />
      <div className="grow">
        <AffirmationDisplay />
      </div>
      <Footer />
    </div>
  )
}

export default App
