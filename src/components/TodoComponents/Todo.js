import React from 'react';

const Todo = props => {

  console.log(props)
  return (
    <div className="Todo" key={Date.now()}>
      <div>{props.item.task}</div>
    </div>
  )
}

export default Todo;