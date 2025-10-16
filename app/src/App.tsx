import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Technology from './pages/Technology'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Technology />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
