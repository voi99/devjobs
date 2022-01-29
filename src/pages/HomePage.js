import React, { Fragment, useState, useEffect } from 'react'
import styles from './HomePage.module.css'
import jobs from '../api/data.json'
import JobsList from '../components/Job/JobsList'
import Animate from '../components/animations/Animate'
import MainHeader from '../components/Header/MainHeader'
import { useCallback } from 'react/cjs/react.development'

const HomePage = () => {
   const [filteredJobs, setFilteredJobs] = useState([])
   const [load, setLoad] = useState(8)
   const [searchProperties, setSearchProperties] = useState({
      first: null,
      second: null,
      third: false,
   })

   const searchPropertiesHandler = useCallback((searchProps) => {
      setSearchProperties(searchProps)
   }, [])

   useEffect(() => {
      let jobsFiltered = jobs
      if (searchProperties.first) {
         jobsFiltered = jobsFiltered.filter(
            (job) =>
               job.company
                  .toLowerCase()
                  .includes(searchProperties.first.toLowerCase()) ||
               job.position
                  .toLowerCase()
                  .includes(searchProperties.first.toLowerCase())
         )
      }
      if (searchProperties.second) {
         jobsFiltered = jobsFiltered.filter((job) =>
            job.location
               .toLowerCase()
               .includes(searchProperties.second.toLowerCase())
         )
      }
      if (searchProperties.third) {
         jobsFiltered = jobsFiltered.filter(
            (job) => job.contract === 'Full Time'
         )
      }
      setFilteredJobs(jobsFiltered)
   }, [searchProperties])

   const loadMoreHandler = () => {
      const loadMore = load + 3
      setLoad(loadMore)
   }

   return (
      <Fragment>
         <MainHeader
            type='search'
            setPropertiesFunc={searchPropertiesHandler}
         />
         <Animate className={styles.main}>
            <JobsList jobs={filteredJobs} load={load} />
            {load < filteredJobs.length && (
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
