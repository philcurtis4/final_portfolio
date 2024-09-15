import { useState } from 'react'

import Header from './components/Header'
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skill from './pages/Skills'

function App() {
  

  return (
    <>
			
      <Header />
			<Landing />
			<About  />
			<Skill />
			<Projects />
			<Contact />

    </>
  )
}

export default App
