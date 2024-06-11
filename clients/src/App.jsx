import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import SignUp from './components/SignUp'
import CoursePage from './components/CoursePage'



function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/course" element={<CoursePage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      </div>
      
    </>
    )
}

export default App