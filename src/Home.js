import React, { useState } from 'react'
import NewTask from './component/NewTask'
import ToDoList from './component/ToDoList'
import {v4 as uuidv4} from 'uuid';


// const tasks = [
//     {
//         id:1,
//         title:"Study",
//         description: "do this do that......."
//     },
//     {
//         id:2,
//         title:"Job",
//         description: "do this do that......."
//     }
// ]

// const tasks=[];

const Home=()=>{

  const [tasks,setTasks] = useState([
  //   {
  //     id:1,
  //     title:"Study",
  //     description: "do this do that......."
  // },
  // {
  //     id:2,
  //     title:"Job",
  //     description: "do this do that......."
  // }
  ]);

  const addTask=(task)=>{
    // console.log(task);
    setTasks((oldTasks)=>{
      return [...oldTasks,{id:uuidv4(),task}]
    })
  }

  return (
    <div>
      <NewTask addTask={addTask} />
      <ToDoList tasks = {tasks}/>
    </div>
  )
}

export default Home