import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import FindJobs from './components/FindJobs'
import JobDetails from './components/JobDetails'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={FindJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
