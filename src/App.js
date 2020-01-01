import React, { Component } from "react";
import "./App.css";

import Tasks from './components/Tasks';
import tasks from "./mock/task.json";

const initialState = {
  tasks: tasks
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const { tasks } = this.state;
    return <Tasks tasks={tasks} />
  }
}

export default App;