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
  }

};

module.exports = CoursesAction;
