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
          value={this.props.course.title}
          onChange={this.props.onChange}
          error={this.props.errors.title} />
        <Input
          name="author"
          label="Author"
          value={this.props.course.author.name}
          onChange={this.props.onChange}
          error={this.props.errors.name} />
        <Input
          name="category"
          label="Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          error={this.props.errors.category} />
        <Input
          name="length"
          label="Length"
          value={this.props.course.length}
          onChange={this.props.onChange} />
        <Input
          name="watchHref"
          label="Link"
          value={this.props.course.watchHref}
          onChange={this.props.onChange}
          error={this.props.errors.watchHref} />
        <input type="submit" value="Save" className="btn btn-default"
          onClick={this.props.onSave}/>
      </form>
  );
  }
});

module.exports = CourseForm;
