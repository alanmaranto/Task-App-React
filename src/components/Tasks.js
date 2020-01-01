import React, { Component } from "react";
import PropTypes from 'prop-types';

import Task from "./Task/Task";

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

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
}

export default Tasks;
