import React from 'react'

export default class InlineEdit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editing : false,
      inputValue: ''
    }
  }
  handleClick = () =>{
    this.setState({editing: true})
  }
  handleChange = (e) => {
    this.setState({inputValue : e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.inputValue.trim()) {
      return
    }
    this.props.handleSubmit(this.state.inputValue)
    this.setState({
      inputValue : '',
      editing: false
    })
  }
  handleClose = () =>{
    this.setState({editing : false})
  }
  render(){
    return(
      <div>
        {this.state.editing &&
          <form onSubmit={this.handleSubmit} className={"task form-group"}>
            <input type="text"  onChange={this.handleChange} className={"form-control"}
              placeholder={"Enter task content"}
            />
            <div className={"mt-2"}>
              <button className={"btn btn-info"}>Add task</button>
              <i className="fas fa-times ml-3" onClick={this.handleClose}></i>
            </div>
          </form>
        }
        { !this.state.editing &&
        <div className={"task blue"} onClick={this.handleClick}>
          <i className="fas fa-plus mx-3"></i>
          New Task
        </div>
        }
      </div>
    )
  }
}