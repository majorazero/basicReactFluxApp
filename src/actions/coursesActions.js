"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var CoursesApi = require("../api/courseApi");
var ActionTypes = require("../constants/actionTypes");

var CoursesAction = {
  deleteCourse: function(id){
    console.log(id);
    CoursesApi.deleteCourse();
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSES,
      id: id
    });
  },
  createCourse: function(course){
    var newCourse = CoursesApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSES,
      course: newCourse
    });
  },
  updateCourse: function(course){
    var updatedCourse = CoursesApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSES,
      course: updatedCourse
    });
  }
};

module.exports = CoursesAction;
