import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import ThemeContext from './store/theme'
import { AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
   const ctx = useContext(ThemeContext)
   const location = useLocation()

   return (
      <div className={`${!!ctx.darkTheme ? 'dark' : ''} App`}>
         <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
               <Route path='/' element={<HomePage />}></Route>
               <Route path=':id' element={<DetailsPage />}></Route>
            </Routes>
         </AnimatePresence>
      </div>
   )
}

export default App
