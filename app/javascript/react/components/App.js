import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CourtIndexContainer from '../containers/CourtIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CourtIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
