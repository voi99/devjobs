import React, { Fragment, useState } from 'react'
import styles from './HomePage.module.css'
import JobsList from '../components/Job/JobsList'
import Animate from '../components/animations/Animate'
import MainHeader from '../components/Header/MainHeader'
import useSearch from '../hooks/use-search'

const HomePage = () => {
   const [filteredJobs, searchPropertiesHandler] = useSearch()
   const [load, setLoad] = useState(8)

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
