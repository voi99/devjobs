import React, { Fragment } from 'react'
import styles from './JobsList.module.css'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'

const JobsList = ({ jobs, load }) => {
   return (
      <Fragment>
         {jobs.length === 0 ? (
            <div className={styles.empty}>{`So Empty :(`}</div>
         ) : (
            <div className={styles.jobs}>
               {jobs.slice(0, load).map((job) => (
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
         )}
      </Fragment>
   )
}

export default JobsList
