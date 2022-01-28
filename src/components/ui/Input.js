import React from 'react'
import styles from './Input.module.css'

const Input = ({ icon, placeHolder, className }) => {
   return (
      <div className={`${styles['input-wrapper']} ${styles[className]}`}>
         <img src={icon} alt='' />
         <input
            type='text'
            className={styles.input}
            placeholder={placeHolder}
         />
      </div>
   )
}

export default Input
