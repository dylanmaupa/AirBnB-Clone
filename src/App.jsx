import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';

const App = () => {
  return (
    <main className='main-wrapper'>
      <Navbar/>
      <Hero/>
      <Experience/>
    </main>
  )
}

export default App