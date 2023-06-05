import {withRouter, Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  //   const toJobsComponent = () => {
  //     const {history} = props
  //     history.replace('/jobs')
  //   }

  <>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Find the Job That Fits Your Life</h1>
      <p className="head-description">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your ability and potential.
      </p>
      <Link to="/jobs">
        <button className="find-jobs-btn" type="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </>
)

export default withRouter(Home)
