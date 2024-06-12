import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Signin from './pages/Signin'

function App() {

  return (
    <>
      <section className='  min-h-screen bg-violet-200   dark:bg-gray-700 dark:text-gray-300 '>
        <div>
          <Navbar />
        </div>
        <div>
          <Signin />
        </div>
      </section>

    </>
  )
}

export default App
