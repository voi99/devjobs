import React from 'react'
import styles from './CompanyHeader.module.css'
import Animate from '../animations/Animate'
import { useParams } from 'react-router-dom'
import jobs from '../../api/data.json'

const CompanyHeader = () => {
   const { id } = useParams()

   const singleJob = jobs.filter((job) => job.id === +id)[0]
   const logoSvg =
      singleJob.logo.split('/')[singleJob.logo.split('/').length - 1]
   const logoImage = require(`../../assets/logos/${logoSvg}`)

   return (
      <Animate className={styles['company-header-section']}>
         <div
            className={styles.logo}
            style={{
               backgroundColor: singleJob.logoBackground,
               backgroundImage: `url(${logoImage})`,
            }}
         ></div>
         <div className={styles['company-info']}>
            <div>
               <h3>{singleJob.company}</h3>
               <p>{`${singleJob.company.toLowerCase()}.com`}</p>
            </div>
            <a
               href={singleJob.website}
               className='btn btn-2'
               target='_blank'
               rel='noreferrer'
            >
               Company Site
            </a>
         </div>
      </Animate>
   )
}

export default CompanyHeader
