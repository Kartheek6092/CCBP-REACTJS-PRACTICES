import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="bad-path" />
    </Switch>
  </>
)

export default App
