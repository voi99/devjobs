import React, { useState, useEffect } from 'react'

const ThemeContext = React.createContext({
   darkTheme: false,
   changeTheme: () => {},
})

export const ThemeContextProvider = (props) => {
   const [darkTheme, setDarkTheme] = useState(false)

   useEffect(() => {
      try {
         const theme = localStorage.getItem('dark-theme')
         if (theme === 'true') {
            setDarkTheme(true)
         }
      } catch {
         setDarkTheme(false)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('dark-theme', darkTheme)
   }, [darkTheme])

   const changeTheme = () => {
      setDarkTheme((prevState) => !prevState)
   }

   return (
      <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
         {props.children}
      </ThemeContext.Provider>
   )
}

export default ThemeContext
