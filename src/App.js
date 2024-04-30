import { useState, useEffect } from 'react'
import { Routes, Route, useLocation} from "react-router-dom";
import Hamburger from 'hamburger-react'

import './App.css';
import './Menu.css'
import emailIcon from './media/icons/email.svg'

import Menu from './Menu.js'
import Home from './Home.js'
import Skills from './Skills.js'
import Experience from './Experience.js'

function App() {

  let location = useLocation()
  const [isOpen, setOpen] = useState(false)

  useEffect( () => {
    setOpen(false)
  }, [location])

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-div">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="avalibility-div">
          <div className="avaliable-icon"/>
          <p>Available for jobs</p>
        </div>
        <a href='mailto:se.townsend31@gmail.com'>
          <img className="email-icon" src={emailIcon} alt="email icon" />
        </a>
      </header>
      <div className="Body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
        </Routes>
      </div>
      <Menu toggled={isOpen} />
    </div>
  );
}

export default App;
