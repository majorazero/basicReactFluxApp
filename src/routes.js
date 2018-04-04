"use strict";

var React = require("react");
var Router = require("react-router");

//used to declare what route should load when the page loads
//without using any additional segments after slash
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route; //defines our routes
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require("./components/homePage")} />
    <Route name="courses" handler={require("./components/courses/coursesPage")} />
    <Route name="authors" handler={require("./components/authors/authorPage")} />
    <Route name="addAuthor" path="author" handler={require("./components/authors/ManageAuthorPage")} />
    <Route name ="manageAuthor" path="author/:id" handler={require("./components/authors/ManageAuthorPage")} />
    <Route name="about" handler={require("./components/about/aboutPage")} />
    <NotFoundRoute handler={require("./components/NotFoundPage")} />
    <Redirect from="about-us" to="about" />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
