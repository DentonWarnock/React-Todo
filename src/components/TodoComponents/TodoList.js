import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  render(props) {
    return (
      <div className="todo-list">
        {this.props.todoList.map(item => (
          <Todo 
            item={item} 
            key={item.id}
            markComplete={this.props.markComplete}
            />
          ))}
        <button className="clear-btn" onClick={this.props.clearComplete}>
          Clear Completed
        </button>
      </div>
    )
  }
}

export default TodoList;