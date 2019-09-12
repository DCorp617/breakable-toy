import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CourtShowContainer from '../containers/CourtShowContainer'
import HomeIndexContainer from '../containers/HomeIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeIndexContainer} />
        <Route exact path="/courts/:id" component={CourtShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
