import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    {' '}
    {/*BrowserRouter to add routing wrap all the components with BrowserRouter */}
    <Header />
    <Switch>
      {/* switch component will only render the first route that matches the path.If the no Path mathches, it renders not Found Component*/}
      <Route exact path="/" component={Home} />
      {/*route component renders specific UI component when the path matches current Url*/}
      <Route exact path="/about" component={About} />
      {/*exact renders the route if path matches exactly the current Url */}
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
