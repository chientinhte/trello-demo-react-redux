import React from 'react'
import {connect} from 'react-redux'
import {editTask, moveTask,deleteTask} from '../actions'
// const Task = ({task}) => {
class Task extends React.Component{
  constructor(props){
    super(props)
    this.state={
      editing:false,
      inputVale: '',
      listId: this.props.task.listId
    }
  }
  clickEdit = ()=>{
    this.setState({editing:true})
  }
  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    if (!this.state.inputValue.trim()) {
      return
    }
    this.props.dispatch(editTask(this.props.task.id, this.state.inputValue))
    this.setState({editing:false})
  }
  closeEdit = () =>{
    this.setState({editing:false})
  } 
  selectList = (e) =>{
    this.setState({listId: e.target.value})
  }
  moveTask = () =>{
    let listId = parseInt(this.state.listId)
    if(listId){
      this.props.dispatch(moveTask(this.props.task.id, listId))
    }
  }
  deleteTask = () =>{
    this.props.dispatch(deleteTask(this.props.task.id))
  }
  render(){
      let content
      const taskContent =
        <div>
          <div>
            {this.props.task.text}
            <i className="far fa-edit float-right edit-icon" onClick={this.clickEdit}></i>
          </div>
          <div style={{textAlign: "right"}}>
            {this.props.task.time}
          </div>
        </div>
      const taskEditing =
        <div>
          <i className="fas fa-times float-right" onClick={this.closeEdit}></i>
          <form className={"form-inline"} onSubmit={this.handleSubmit}>
            <input className={"form-control w-75"} type="text" onChange={this.handleChange}
              value={this.props.task.text}
            />
            <button className={"btn btn-info ml-3"}>Edit</button>
          </form>
          <div className={"mt-3"}>
            <div style={{display:"flex"}}>
              <select onChange={this.selectList} value={this.state.listId} className={"form-control"} style={{width:"35%"}}>
                {this.props.lists.map(list => (
                  <option value={list.id} key={list.id}>{list.name}</option>
                ))}
              </select>
              <button className={"btn btn-info btn-sm"} onClick={this.moveTask}>
                <i className="fas fa-arrow-right"></i> Move
              </button>
              <i className="fas fa-trash-alt delete-icon ml-auto" onClick={this.deleteTask}></i>
            </div>

          </div>
        </div>
      content = this.state.editing ? taskEditing : taskContent
    return (
      <li className="task">
        {content}
      </li>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists:state.lists
  }
}
export default connect(mapStateToProps)(Task)