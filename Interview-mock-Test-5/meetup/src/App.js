import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import {Component} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import MeetContext from './Context/MeetContext'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {names: '', topics: ''}

  updateDetails = (val1, val2) => {
    this.setState({
      names: val1,
      topics: val2,
    })
  }

  render() {
    const {names, topics} = this.state
    return (
      <MeetContext.Provider
        value={{
          names,
          topics,
          updateDetails: this.updateDetails,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </MeetContext.Provider>
    )
  }
}

export default App
