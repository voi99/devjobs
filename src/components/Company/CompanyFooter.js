import React from 'react'
import styles from './CompanyFooter.module.css'

const CompanyFooter = ({ job }) => {
   return (
      <div className={styles['company-footer']}>
         <div className={styles['content-wrapper']}>
            <div className={styles['job-info']}>
               <h3>{job.position}</h3>
               <p>{job.company}</p>
            </div>
            <a
               href={job.apply}
               className='btn btn-1'
               target='_blank'
               rel='noreferrer'
            >
               Apply Now
            </a>
         </div>
      </div>
   )
}

export default CompanyFooter
