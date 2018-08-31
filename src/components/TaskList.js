import React from 'react'
import {connect} from 'react-redux'
import {addNewTask} from '../actions'
import Task from './Task'
import InlineEdit from './InlineEdit'

const TaskList = ({list, tasks, dispatch }) => {
// class TaskList extends React.Component ({list, tasks, dispatch }) => {
  let borderColor
  switch(list.id) {
    case 1:borderColor = "#6DAFF0";break;
    case 2:borderColor = "#12B9CE";break;
    case 3:borderColor = "#A6CC82";break;
    default:borderColor = "#6DAFF0";
  }
  let nameStyle = {
    paddingBottom: "10px",
    borderBottom: '3px solid',
    borderColor: borderColor
  }
  function addTask(text){
    dispatch(addNewTask(text,list.id))
  }
  return (
    <div>
      <div style={nameStyle}>
        <span className={"h3"} >{list.name} </span><span>({tasks.length})</span>
      </div>
      <InlineEdit handleSubmit={addTask}></InlineEdit>
      <ul>
        {tasks.map(task =>(
          <Task key={task.id} task={task}></Task>
        ))}
      </ul>
    </div>
  )
}

export default connect()(TaskList)
