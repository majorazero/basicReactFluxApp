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
      },
      errors: {}
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
          onChange={this._setCourseState}
          errors={this.state.errors}/>
      </div>
    );
  },
  _courseFormValidation: function(){
    var validForm = true;
    this.state.errors = {};
    var course = this.state.course;
    if(course.title.length < 2){
      this.state.errors.title = "Title must be at least 2 characters long.";
      validForm = false;
    }
    if(course.author.name.length < 2){
      this.state.errors.name = "Author name must be at least 2 characters long.";
      validForm = false;
    }
    if(course.category.length < 2){
      this.state.errors.category = "Category name must be at least 2 characters long.";
      validForm = false;
    }
    if(course.watchHref.length < 2){
      this.state.errors.watchHref = "Link must be at least 2 characters long.";
      validForm = false;
    }
    this.setState({errors: this.state.errors});
    return validForm;
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
    if(!this._courseFormValidation()){
      return;
    }
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
