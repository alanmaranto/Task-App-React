import React, { Component } from "react";
import PropTypes from 'prop-types';

const initialState = { 

}
class Task extends Component {
  constructor(props){
    super(props);
    this.state= initialState;
  }

  styleCompleted = () => {
    const { task } = this.props;
    return {
      fontSize: '20px',
      color: task.done ? 'purple' : 'red',
      textDecoration: task.done ? 'line-through' : 'none'
    }
  }

  render() {
    
    const { task } = this.props;
    return (
      <p style={this.styleCompleted()}>
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

Task.propTypes = {
  task: PropTypes.object.isRequired,
}

export default Task;
