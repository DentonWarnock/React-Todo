import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  render(props) {
    return (
      <div className="todo-list">
        {this.props.todoList.map(item => (
          <Todo item={item} key={item.id}/>
          ))}
      </div>
    )
  }
}

export default TodoList;