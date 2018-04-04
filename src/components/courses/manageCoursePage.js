"use strict";

var React = require("react");
var CourseForm = require("./coursesForm");

var ManageCoursePage = React.createClass({
  getInitialState: function(){
    return {
      course: {
        watchHref: "",
        length: "",
        category: "",
        title: "",
        author: ""
      }
    };
  },
  render: function(){
    return (
      <div>
        <CourseForm
          course={this.state.course}/>
      </div>
    );
  }
});

module.exports = ManageCoursePage;
