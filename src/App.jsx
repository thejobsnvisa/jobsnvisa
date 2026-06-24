import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Recruiter from './pages/Recruiter'
import Employee from './pages/Employee'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiters" element={<Recruiter />} />
        <Route path="/employers" element={<Employee/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App