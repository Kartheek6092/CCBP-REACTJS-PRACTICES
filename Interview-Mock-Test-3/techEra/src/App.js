import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home'
import Header from './Components/Header'
import CourseItem from './Components/CourseItem'
import NotFound from './Components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses/:id" component={CourseItem} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App
