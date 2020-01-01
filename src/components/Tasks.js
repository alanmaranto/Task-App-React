import React, { Component } from "react";

import Task from "./Task";

class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        {tasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    );
  }
}

export default Tasks;
