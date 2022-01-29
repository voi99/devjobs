import React, { useContext } from 'react'
import styles from './Header.module.css'
import sun from '../../assets/desktop/icon-sun.svg'
import moon from '../../assets/desktop/icon-moon.svg'
import ThemeContext from '../../store/theme'
import Search from '../Search/Search'
import CompanyHeader from '../Company/CompanyHeader'
import { Link } from 'react-router-dom'

const MainHeader = ({ type, setPropertiesFunc }) => {
   const ctx = useContext(ThemeContext)

   return (
      <header className={styles.header}>
         <div className={styles['main-title']}>
            <Link to='/'>
               <h1 className={styles['home-page-title']}>devjobs</h1>
            </Link>
            <div className={styles['toggle-theme-wrapper']}>
               <img src={sun} alt='light-theme' />
               <label className={styles.switch}>
                  <input
                     type='checkbox'
                     name='toggle-theme'
                     onChange={ctx.changeTheme}
                     checked={!!ctx.darkTheme}
                  />
                  <span className={styles.slider}></span>
               </label>
               <img src={moon} alt='dark-theme' />
            </div>
         </div>
         {type === 'search' ? (
            <Search setPropertiesFunc={setPropertiesFunc} />
         ) : (
            <CompanyHeader />
         )}
      </header>
   )
}

export default MainHeader
