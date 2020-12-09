import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: " ",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={dis}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo"
          style={input1Style}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={input2Style}
        />
      </form>
    );
  }
}

const dis = {
  display: "flex",
};

const input1Style = { flex: "10", padding: "5px" };

const input2Style = { flex: "1" };

export default AddTodo;
