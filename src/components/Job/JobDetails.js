import React from 'react'
import styles from './JobDetails.module.css'

const JobDetails = ({ job }) => {
   return (
      <main className={styles['job-details']}>
         <div className={styles['job-details-header']}>
            <div className={styles['short-info-wrapper']}>
               <div className={styles['short-info']}>
                  <span>{job.postedAt}</span>
                  <li></li>
                  <span>{job.contract}</span>
               </div>
               <h2>{job.position}</h2>
               <h4 className={styles['job-details-location']}>
                  {job.location}
               </h4>
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
         <p className={styles['job-description']}>{job.description}</p>
         <div className={styles['job-requirements']}>
            <h3>Requirements</h3>
            <p className={styles['job-requirements-content']}>
               {job.requirements.content}
            </p>
            <ul>
               {job.requirements.items.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
         </div>
         <div className={styles['job-role']}>
            <h3>What You Will Do</h3>
            <p className={styles['job-role-content']}>{job.role.content}</p>
            <ol>
               {job.role.items.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ol>
         </div>
      </main>
   )
}

export default JobDetails
