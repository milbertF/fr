import React from 'react'
import './App.css'
import './components/styles/ui/animationOnLoad.css'
import './components/styles/ui/animationOnView.css'
import './components/styles/ui/tooltip.css'

import Header from './components/templates/header.jsx'
import Hero from './components/templates/hero.jsx'
import Aboutme from './components/templates/aboume.jsx'
import Process from './components/templates/process.jsx'
import Projects from './components/templates/projects.jsx'
import Blog from './components/templates/blog.jsx'

function App() {

  return (
    <>
    <div className="whole">
      <div className="tooltip" id='tooltip'>
        <p>tooltip</p>
      </div>
      <Header />
      <Hero />
      <Aboutme />
      <Process />
      <Projects />
      <Blog />
    </div>
    
    </>
  )
}

export default App
