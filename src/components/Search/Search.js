import React from 'react'
import styles from './Search.module.css'
import Animate from '../animations/Animate'
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import filterIcon from '../../assets/mobile/icon-filter.svg'
import Input from '../ui/Input'

const Search = () => {
   return (
      <Animate className={styles['search-section']}>
         <Input
            icon={searchIcon}
            placeHolder='Filter by title, companies, expertise...'
            key='search'
            className='search-input'
         />
         <Input
            icon={locationIcon}
            placeHolder='Filter by location...'
            key='location'
            className='location-input-desktop'
         />
         <div className={styles['desktop-third-col']} key='full-time'>
            <div className={styles['full-time-wrapper']}>
               <input type='checkbox' id='full-time' />
               <label
                  htmlFor='full-time'
                  className={styles['label-for-full-time']}
               >
                  Full Time <span>Only</span>
               </label>
            </div>
            <button className='btn btn-1'>Search</button>
         </div>
         <div className={styles['mobile-actions']}>
            <img src={filterIcon} alt='' className='filter-icon-mobile' />
            <button className={`${styles['mobile-search-btn']} btn`}>
               <img src={searchIcon} alt='' />
            </button>
         </div>
      </Animate>
   )
}

export default Search
