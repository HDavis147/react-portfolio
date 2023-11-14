import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {

  return (
    <>
      <Header />
    <Router>
      <Navigation />
    </Router>
  
      <Footer />
    </>
  )
}
