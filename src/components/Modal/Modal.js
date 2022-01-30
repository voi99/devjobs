import React, { forwardRef, Fragment } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import locationIcon from '../../assets/desktop/icon-location.svg'
import Input from '../ui/Input'
import Animate from '../animations/Animate'

const Backdrop = ({ modalHandler }) => {
   return <div className={styles.backdrop} onClick={modalHandler}></div>
}

const ModalForm = forwardRef(
   (
      { searchPropertiesHandler, modalHandler },
      { mobileSecondRef, mobileThirdRef }
   ) => {
      return (
         <Animate className={styles['modal-form']}>
            <Input
               icon={locationIcon}
               placeHolder='Filter by location...'
               ref={mobileSecondRef}
            />
            <div className={styles['full-time-wrapper']}>
               <input type='checkbox' id='full-time' ref={mobileThirdRef} />
               <label
                  htmlFor='full-time'
                  className={styles['label-for-full-time']}
               >
                  Full Time <span>Only</span>
               </label>
            </div>
            <button
               className='btn btn-1 mobile'
               onClick={(e) => {
                  searchPropertiesHandler(e)
                  modalHandler()
               }}
            >
               Search
            </button>
         </Animate>
      )
   }
)

const Modal = ({ modalHandler, searchPropertiesHandler }, ref) => {
   return (
      <Fragment>
         {createPortal(
            <Backdrop modalHandler={modalHandler} />,
            document.getElementById('backdrop')
         )}
         {createPortal(
            <ModalForm
               ref={ref}
               modalHandler={modalHandler}
               searchPropertiesHandler={searchPropertiesHandler}
            />,
            document.getElementById('modal-form')
         )}
      </Fragment>
   )
}

export default forwardRef(Modal)
