"use strict";

var React = require("react");
var CoursesList = require("./coursesList");

var CoursesPage = React.createClass({
render: function() {
  return (
    <div>
      <h1>Courses</h1>
      <CoursesList />
    </div>
  );
}

});

module.exports = CoursesPage;
