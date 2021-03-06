"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var AuthorActions = require("../../actions/authorActions");
var toastr = require("toastr");

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired //for development,helpful error messages
  },
  /**
  * deletes authors and passes to the authorAction
  * @param {string} id the id of the author that is going to be deleted.
  * @param {SyntheticEvent} event needed to prevent the page from reloading
  */
  _deleteAuthor: function(id, event){
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success("Author Deleted");
  },
  render: function(){
      var createAuthorRow = function(author){
        return (
          <tr key={author.id}>
            <td><a href="#" onClick={this._deleteAuthor.bind(this, author.id)}>Delete</a></td>
            <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
            <td>{author.firstName} {author.lastName}</td>
          </tr>
        );
      };
      return (
          <table className="table">
            <thead>
              <th></th>
              <th>ID</th>
              <th>Name</th>
            </thead>
            <tbody>
              {this.props.authors.map(createAuthorRow, this)}
            </tbody>
          </table>
      );
  }
});

module.exports = AuthorList;
