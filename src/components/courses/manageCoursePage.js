"use strict";

var React = require("react");
var Router = require("react-router");
var CourseForm = require("./coursesForm");
var CourseStore = require("../../stores/courseStore");
var CourseAction = require("../../actions/coursesActions");
var toastr = require("toastr");

var ManageCoursePage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function(){
    return {
      course: {
        watchHref: "",
        length: "",
        category: "",
        title: "",
        author: {id: "", name: ""}
      }
    };
  },
  componentWillMount: function(){
    var courseId = this.props.params.id;
    if (courseId){
      this.setState({course: CourseStore.getCourseById(courseId)});
    }
  },
  render: function(){
    return (
      <div>
        <CourseForm
          course={this.state.course}
          onSave={this._saveCourse}
          onChange={this._setCourseState}/>
      </div>
    );
  },
  _setCourseState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    switch(field){
      case "author":
        this.state.course.author.name = value;
        break;
      default:
        this.state.course[field] = value;
    }
    return this.setState({course: this.state.course});
  },
  _saveCourse: function(event){
    event.preventDefault();
    //update function
    if(this.state.course.id){
      CourseAction.updateCourse(this.state.course);
    } else {
      CourseAction.createCourse(this.state.course);
    }
    toastr.success("Course Saved!");
    this.transitionTo("courses");
  }
});

module.exports = ManageCoursePage;
