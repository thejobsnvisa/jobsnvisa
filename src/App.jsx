import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Recruiter from './pages/Recruiter'
import Employee from './pages/Employee'
import Gprecuirter from './pages/Gprecuirter'
import Blog from './pages/Blog'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiters-services" element={<Recruiter />} />
        <Route path="/employee-services" element={<Employee/>} />
        <Route path="/recruiters" element={<Gprecuirter />} />
        <Route path="/blogs" element={<Blog/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App