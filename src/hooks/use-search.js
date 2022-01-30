import { useState, useCallback, useEffect } from 'react'
import jobs from '../api/data.json'

const useSearch = () => {
   const [filteredJobs, setFilteredJobs] = useState([])
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

   return [filteredJobs, searchPropertiesHandler]
}

export default useSearch
