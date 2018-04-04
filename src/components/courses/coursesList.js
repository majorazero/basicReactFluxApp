"use strict";

var React = require("react");
var CourseActions = require("../../actions/coursesActions");
var toastr = require("toastr");

var CoursesList = React.createClass({
  _deleteCourse: function(id, event){
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success("Deleted Course!");
  },
  render: function() {
    var createCourseRow = function(course){
      return (
        <tr key={course.id}>
          <td><a href={course.watchHref}>Watch</a></td>
          <td><a href="#" onClick={this._deleteCourse.bind(this, course.id)}>Delete</a></td>
          <td>{course.title}</td>
          <td>{course.author.name}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
      );
    };
    return (
      <table className="table">
        <thead>
          <th></th>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </thead>
        <tbody>
          {this.props.courses.map(createCourseRow, this)}
        </tbody>
      </table>
    );
  }

});

module.exports = CoursesList;
