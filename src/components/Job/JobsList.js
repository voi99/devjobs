import React from 'react'
import styles from './JobsList.module.css'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'

const JobsList = ({ jobs }) => {
   return (
      <div className={styles.jobs}>
         {jobs.map((job) => (
            <Link to={`/${job.id}`} key={job.id}>
               <JobCard
                  logo={job.logo}
                  logoBackground={job.logoBackground}
                  postedAt={job.postedAt}
                  contract={job.contract}
                  position={job.position}
                  company={job.company}
                  location={job.location}
               />
            </Link>
         ))}
      </div>
   )
}

export default JobsList
