import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import SignUp from './components/SignUp'
import CoursePage from './components/CoursePage'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/context/AuthProvider'




function App() {
  const [authUser,setAuthUser]=useAuth()
  // console.log(authUser)
  
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/course" element={authUser?<CoursePage />:<Navigate  to="/signup"/>}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
        <Toaster />
      </div>
      
    </>
    )
}

export default App