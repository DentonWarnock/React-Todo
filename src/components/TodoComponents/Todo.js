import React from 'react';

const Todo = props => {
  let verboseClassName = "item";
  if (props.item.completed) {
    verboseClassName = verboseClassName + " completed";
  }

  const handleClick = () => {
    props.markComplete(props.item.id)
  }

  console.log(props)
  return (
    <div  className={verboseClassName} onClick={handleClick} key={props.item.id}>
      <div>{props.item.task}</div>
    </div>
  )
}

export default Todo;