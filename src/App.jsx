import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Hero from './components/Hero';

import './index.css'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App
