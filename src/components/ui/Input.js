import React, { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = ({ icon, placeHolder, className }, ref) => {
   return (
      <div className={`${styles['input-wrapper']} ${styles[className]}`}>
         <img src={icon} alt='' />
         <input
            type='text'
            className={styles.input}
            placeholder={placeHolder}
            ref={ref}
         />
      </div>
   )
}

export default forwardRef(Input)
