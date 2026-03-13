import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Spacer from './components/Spacer'
import Profile from './components/Profile'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom';
import Experience from './components/Experience'
import { Element } from 'react-scroll'
import ScrollAnimationObserver from './components/ScrollAnimationObserver'
import { useState } from 'react'

function App() {  
  const [nbNav, setNbNav] = useState(0)
  const [currentNav, setCurrentNav] = useState('/')

  function incNav() {
    setNbNav((prev)=>prev+1)
    console.log('nb nav ', nbNav)
  }

  return (
    <>
      <BrowserRouter>
      <ScrollAnimationObserver setCurrentNav={setCurrentNav}>
      
        <Header currentNav = {currentNav} setCurrentNav={setCurrentNav} clickHandler={incNav} />      
            <Element id= "" name="/">
                {/*nbNav>0 && <Spacer />*/}
                <Hero />
            </Element>
            <Element id = "/experience" name="/experience">
              <Spacer />
              <Experience />
            </Element>
            <Element id = "/profile" name="/profile">
              <Spacer />
              <Profile />
            </Element>
            <Element id="/contact" name="/contact">
              <Spacer />
              <Contact />
            </Element>
          
        <Footer />
        </ScrollAnimationObserver>
      </BrowserRouter>
    </>
  )
}

export default App
