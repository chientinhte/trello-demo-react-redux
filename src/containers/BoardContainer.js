import React from 'react'
import {connect} from 'react-redux'
import TaskListContainer from './TaskListContainer'

const BoardContainer = ({lists,tasks}) => {
  return(
    <div className={"row"}>
        {lists.map(list => (
          <div className={'col-sm-4'} key={list.id}>
            <TaskListContainer id={list.id}></TaskListContainer>
          </div>
        ))}
      {/*<TaskList></TaskList>*/}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lists:state.lists
  }
}
export default connect(mapStateToProps)(BoardContainer)