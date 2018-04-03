"use strict";
//we'll use this as the top level controller view
var React = require("react");
var Router = require("react-router");
var AuthorForm = require("./AuthorForm");
var AuthorApi = require("../../api/authorApi");
var toastr = require("toastr");

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function(){
    return {
      author: {id: "", firstName: "", lastName: ""}
    };
  },
  render: function(){
    return (
        <AuthorForm
          author={this.state.author}
          onChange={this._setAuthorState}
          onSave={this._saveAuthor} />
    );
  },
  _setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  _saveAuthor: function(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    toastr.success("Author saved!");
    this.transitionTo("authors"); //requires the mixin
  }
});

module.exports = ManageAuthorPage;
