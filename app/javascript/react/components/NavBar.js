import React, { Component } from "react"
import { Link, Route, Switch } from "react-router-dom"

const NavBar = props  => {
  return(
    <div className="row column">
      <div className="navbar">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar">
        <Link to="/court">All Courts</Link>
      </div>
      <div className="content">
        <h1  className="page-title">Courts</h1>
      </div>
      <Switch>
        <Route exact path="/" component={HomeIndexContainer} />
      </Switch>
  )
}
