import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CourtIndexContainer from '../containers/CourtIndexContainer'
import CourtShowContainer from '../containers/CourtShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CourtIndexContainer} />
        <Route exact path="/courts/:id" component={CourtShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
