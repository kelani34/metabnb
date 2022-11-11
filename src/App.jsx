import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/header/header'

function App() {

  return (
    <>
      <Router>
        <Header>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        </Header>
      </Router>
    </>
  )
}

export default App