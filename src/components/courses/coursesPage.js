"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var CoursesList = require("./coursesList");
var CourseStore = require("../../stores/courseStore");

var CoursesPage = React.createClass({
  getInitialState: function(){
    return {
      courses: CourseStore.getAllCourses()
    };
  },
  componentWillMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CourseStore.removeChangeListener(this._onChange);
  },
  /**
  * Written so React will update changes like when coureses are deleted.
  */
  _onChange: function(){
    this.setState({ courses: CourseStore.getAllCourses() });
  },
  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="addCourse" className="btn btn-default">Add Course</Link>
        <CoursesList courses={this.state.courses}/>
      </div>
    );
  }

});

module.exports = CoursesPage;
