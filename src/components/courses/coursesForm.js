"use strict";
var React = require("react");
var Input = require("../common/textInput");

var CourseForm = React.createClass({
  render: function() {
    return (
      <form>
        <h1>Manage Course</h1>
        <Input
          name="title"
          label="Title"
          value={this.props.title} />
        <Input
          name="author"
          label="Author"
          value={this.props.author} />
        <Input
          name="category"
          label="Category"
          value={this.props.category} />
        <Input
          name="length"
          label="Length"
          value={this.props.length} />
        <input type="submit" value="Save" className="btn btn-default"
          onClick={this.props.onSave}/>
      </form>
  );
  }
});

module.exports = CourseForm;
