import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task } = this.props;
    return (
      <p className="">
        {task.title} - {task.description} - {task.done}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </p>
    );
  }
}

const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer',
}

export default Task;
