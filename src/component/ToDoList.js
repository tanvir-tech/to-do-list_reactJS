import React from 'react'
import Task from './Task'

function ToDoList(props) {
    // console.log(props.tasks);
  return (
    <section>
        List Area
        {
            props.tasks.map((task)=> <Task key={task.id} task={task} />)
        }
    </section>
  )
}

export default ToDoList