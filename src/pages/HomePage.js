import React, { Fragment, useState, useEffect } from 'react'
import styles from './HomePage.module.css'
import jobs from '../api/data.json'
import JobsList from '../components/Job/JobsList'
import Animate from '../components/animations/Animate'
import Header from '../components/Header/MainHeader'

const HomePage = () => {
   const [filteredJobs, setFilteredJobs] = useState(jobs)
   const [loaded, setLoaded] = useState(8)

   useEffect(() => {
      const loadJobs = jobs.slice(0, loaded)
      setFilteredJobs(loadJobs)
   }, [loaded])

   const loadMoreHandler = () => {
      const loadMore = loaded + 3
      setLoaded(loadMore)
   }

   return (
      <Fragment>
         <Header type='search' />
         <Animate className={styles.main}>
            <JobsList jobs={filteredJobs} />
            {loaded < jobs.length && (
               <button
                  className={`btn btn-1 ${styles['load-more-btn']}`}
                  onClick={loadMoreHandler}
               >
                  Load More
               </button>
            )}
         </Animate>
      </Fragment>
   )
}

export default HomePage
