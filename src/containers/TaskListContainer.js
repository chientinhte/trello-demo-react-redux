import React from 'react'
import {connect} from 'react-redux'
import TaskList from '../components/TaskList'

const TaskListContainer = ({list,tasks}) =>(
  <TaskList list={list} tasks={tasks} ></TaskList>
)

const mapStateToProps = (state,props) => {
  return {
    list:state.lists[props.id-1],
    tasks:state.tasks.filter(task => task.listId === props.id)
  }
}
export default connect(mapStateToProps)(TaskListContainer)
