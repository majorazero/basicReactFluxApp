"use strict";

var React = require("react");
var Router = require("react-router");

//used to declare what route should load when the page loads
//without using any additional segments after slash
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route; //defines our routes
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require("./components/homePage")} />
    <Route name="authors" handler={require("./components/authors/authorPage")} />
    <Route name="about" handler={require("./components/about/aboutPage")} />
    <NotFoundRoute handler={require("./components/NotFoundPage")} />
  </Route>
);

module.exports = routes;
