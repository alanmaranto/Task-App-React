import React, { Component } from "react";

const initialState = {
  title: "",
  description: ""
};

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  listeningEvent = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { addTask } = this.props;
    addTask('task from taskform')
    const { title, description } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          onChange={this.listeningEvent}
          value={title}
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Write a description"
          onChange={this.listeningEvent}
          value={description}
        />
        <button type="submit">Submit a task</button>
        {/* Hacer la prueba del boton de submit y explicar diferencias de html */}
      </form>
    );
  }
}

export default TaskForm;
