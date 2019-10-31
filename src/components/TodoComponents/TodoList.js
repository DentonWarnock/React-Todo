import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  showButton = () => {
    return this.props.todoList.length > 0 ? 
     <button className="clear-btn" onClick={this.props.clearComplete}>
       Clear Completed
    </button> : null
  }

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
        {this.showButton()}
      </div>
    )
  }
}

export default TodoList;