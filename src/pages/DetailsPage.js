import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../api/data.json'
import MainHeader from '../components/Header/MainHeader'
import JobDetails from '../components/Job/JobDetails'
import Animate from '../components/animations/Animate'
import CompanyFooter from '../components/Company/CompanyFooter'

const DetailsPage = () => {
   const { id } = useParams()
   const singleJob = jobs.filter((job) => job.id === +id)[0]

   return (
      <Fragment>
         <MainHeader type='company-header' />
         <Animate>
            <JobDetails job={singleJob} />
         </Animate>
         <CompanyFooter job={singleJob} />
      </Fragment>
   )
}

export default DetailsPage
