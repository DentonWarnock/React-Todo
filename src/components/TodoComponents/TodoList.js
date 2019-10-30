import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    return (
      <div className="todo-list">
        <Todo />
      </div>
    )
  }
}

export default TodoList;