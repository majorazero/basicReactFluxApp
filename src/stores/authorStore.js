"use strict";
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter; //used to broadcast events so React components are notified
var assign = require("object-assign"); //combines objects basically well be using this to stitch Node's EventEmitter and the store together.
var CHANGE_EVENT = "change";

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {

  }
});

module.exports = AuthorStore;
