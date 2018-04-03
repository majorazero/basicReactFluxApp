"use strict";

var React = require("react");

var Home = React.createClass({ //Object style of calling components?
  render: function(){
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>Reacting to some Routing and Fluxxing</p>
      </div>
    );
  }
});

module.exports = Home;
