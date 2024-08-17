import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Model from './components/Model';

import './index.css'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model/>
    </main>
  )
}

export default App
