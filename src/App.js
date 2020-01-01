import React, { Component } from "react";
import "./App.css";

import Tasks from "./components/Tasks";
import tasks from "./mock/task.json";
import TaskForm from "./components/TaskForm/TaskForm";

const initialState = {
  tasks: tasks
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addTask = (title, description) => {
    const { tasks } = this.state;

    const newTask = {
      title,
      description,
      id: tasks.length
    };
    this.setState({
      tasks: [...tasks, newTask]
    });
  };

  deleteTask = id => {
    const { tasks } = this.state;
    const deletedTask = tasks.filter(task => task.id !== id);
    this.setState({ tasks: deletedTask });
  };

  checkDone = id => {
    const { tasks } = this.state;
    const checkTask = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: checkTask });
  };

  render() {
    const { tasks } = this.state;
    return (
      <>
        <TaskForm addTask={this.addTask} />
        <Tasks
          tasks={tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </>
    );
  }
}

export default App;
