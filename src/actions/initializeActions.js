"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var AuthorApi = require("../api/authorApi");
var CoursesApi = require("../api/courseApi");

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE_AUTHOR,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE_COURSES,
      initialData: {
        courses: CoursesApi.getAllCourses()
      }
    });
  }
};

module.exports = InitializeActions;
