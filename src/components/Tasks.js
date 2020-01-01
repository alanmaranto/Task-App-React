import React, { Component } from "react";

class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        {tasks.map(task => (
          <p key={task.id}>
            {task.title} - {task.description} - {task.done}
            <input type="checkbox" />
            <button>x</button>
          </p>
        ))}
      </div>
    );
  }
}

export default Tasks;
