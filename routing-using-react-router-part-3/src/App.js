import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import BlogsList from './components/BlogsList'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={BlogsList} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
