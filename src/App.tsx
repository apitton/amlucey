import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Spacer from './components/Spacer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom';
import Details from './components/Details'
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
        <Header currentNav = {currentNav} setCurrentNav={setCurrentNav} clickHandler={incNav} />
        <div className="">          
          <ScrollAnimationObserver setCurrentNav={setCurrentNav}>
            <Element id= "" name="/">
                {nbNav>0 && <Spacer />}
                <Hero />
            </Element>
            <Element id = "/competence" name="/competence">
              <Spacer />
              <Details />
            </Element>
            <Element id = "/projects" name="/projects">
              <Spacer />
              <Projects />
            </Element>
            <Element id="/contact" name="/contact">
              <Spacer />
              <Contact />
            </Element>
          </ScrollAnimationObserver>
        <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
