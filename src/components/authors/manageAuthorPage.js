"use strict";
//we'll use this as the top level controller view
var React = require("react");
var AuthorForm = require("./AuthorForm");

var ManageAuthorPage = React.createClass({
  getInitialState: function(){
    return {
      author: {id: "", firstName: "", lastName: ""}
    };
  },
  render: function(){
    return (
        <AuthorForm
          author={this.state.author}
          onChange={this._setAuthorState} />
    );
  },
  _setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  }
});

module.exports = ManageAuthorPage;
