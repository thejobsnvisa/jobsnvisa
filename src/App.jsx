import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
function App() {
  return (
    <>
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Home />}
         />
      </Routes>
    </Router>    
    </>
  )
}

export default App
