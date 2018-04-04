"use strict";

var React = require("react");
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
  _onChange: function(){
    this.setState({ courses: CourseStore.getAllCourses() });
  },
  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <CoursesList courses={this.state.courses}/>
      </div>
    );
  }

});

module.exports = CoursesPage;
