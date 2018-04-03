"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var Home = React.createClass({ //Object style of calling components?
  render: function(){
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>Reacting to some Routing and Fluxxing</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
});

module.exports = Home;
