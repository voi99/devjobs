import React from 'react'
import styles from './JobCard.module.css'

const JobCard = (props) => {
   const logoSvg = props.logo.split('/')[props.logo.split('/').length - 1]
   const logoImage = require(`../../assets/logos/${logoSvg}`)

   return (
      <div className={styles.card}>
         <div
            className={styles.logo}
            style={{
               backgroundColor: props.logoBackground,
               backgroundImage: `url(${logoImage})`,
            }}
         ></div>
         <div className={styles['short-info']}>
            <span>{props.postedAt}</span>
            <li></li>
            <span>{props.contract}</span>
         </div>
         <h3>{props.position}</h3>
         <p>{props.company}</p>

         <h4 className={styles['job-location']}>{props.location}</h4>
      </div>
   )
}

export default JobCard
