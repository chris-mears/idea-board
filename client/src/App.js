import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/home/HomePage'
import LogInPage from './components/login/LogInPage'
import IdeaPage from './components/idea/IdeaPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          {/* Only ever shows one component at a tie with switch */}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/user/:userId" component={IdeaPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
