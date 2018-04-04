"use strict";
//we'll use this as the top level controller view
var React = require("react");
var Router = require("react-router");
var AuthorForm = require("./AuthorForm");
//var AuthorApi = require("../../api/authorApi"); replaced by actions
var AuthorActions = require("../../actions/authorActions");
var AuthorStore = require("../../stores/authorStore");
var toastr = require("toastr");

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  statics: {
    willTransitionFrom: function(transition, component){
      if (component.state.dirty && !confirm("Leaving before saving?")){ //forms with info in it still
        transition.abort();
      }
    }
  },
  getInitialState: function(){
    return {
      author: {id: "", firstName: "", lastName: ""},
      errors: {},
      dirty: false
    };
  },
  componentWillMount: function() {
      var authorId = this.props.params.id; //from the path "/author:id"
      if (authorId) {
        this.setState({author: AuthorStore.getAuthorById(authorId)});
      }
  },
  render: function(){
    return (
        <AuthorForm
          author={this.state.author}
          onChange={this._setAuthorState}
          onSave={this._saveAuthor}
          errors={this.state.errors}/>
    );
  },
  _setAuthorState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  _authorFormIsValid: function(){
    var formIsValid = true;
    this.state.errors = {}; //clears previous errors
    if(this.state.author.firstName.length < 2){
      this.state.errors.firstName = "First name must be at least 2 characters.";
      formIsValid = false;
    }
    if(this.state.author.lastName.length < 2){
      this.state.errors.lastName = "Last name must be at least 2 characters.";
      formIsValid = false;
    }
    this.setState({errors: this.state.errors});
    return formIsValid;
  },
  _saveAuthor: function(event) {
    event.preventDefault();
    if(!this._authorFormIsValid()){
      return;
    }
    if (this.state.author.id) { //if there is an id this becomes an update
      AuthorActions.updateAuthor(this.state.author);
    } else {
    AuthorActions.createAuthor(this.state.author);
    }
    toastr.success("Author saved!");
    this.setState({dirty: false});
    this.transitionTo("authors"); //requires the mixin
  }
});

module.exports = ManageAuthorPage;
