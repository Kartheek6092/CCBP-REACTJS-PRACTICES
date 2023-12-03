import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

// import NetflixContext from './context/NetflixContext'
import ProtectedRoute from './components/ProtectedRoute'
import NetflixLogin from './components/Login'
import Home from './components/Home'
import Popular from './components/Popular'
import Search from './components/Search'
import MoviesDetails from './components/MovieDetails'
import Account from './components/Account'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {}

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={NetflixLogin} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/popular" component={Popular} />
        <ProtectedRoute exact path="/movies/:id" component={MoviesDetails} />
        <ProtectedRoute exact path="/search" component={Search} />
        <ProtectedRoute exact path="/account" component={Account} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
