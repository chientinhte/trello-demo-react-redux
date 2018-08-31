import { combineReducers } from 'redux'
import * as Action  from '../actions'
let initLists=[
  {id: 1, name:"New"},
  {id: 2, name:"In Progress"},
  {id: 3, name:"Completed"},
]
let initTasks= [
    {id: 1, text: "Build Creative  Assets", time:'sep 1',listId:1},
    {id: 2, text: "Research Product Space", time:'sep 1',listId:2},
    {id: 3, text: "Build Messaging", time:'sep 1',listId:3},
]

const lists = (state = initLists,action)=>{
  switch(action.type){
    default : return initLists
  }
}

let nextId=4
const tasks = function(state = initTasks,action){
  switch(action.type){
    case Action.ADD_NEW_TASK : return[...state,
        {
          id:nextId++ ,
          text: action.text,
          time:  new Date().toLocaleDateString("en-us"),
          listId: action.listId
        }
      ]
    case Action.EDIT_TASK:
      return state.map(task => {
        if(task.id === action.id){
          return {...task,text: action.text}
        }
        return {...task}
      })
    case Action.MOVE_TASK:
      return state.map(task => {
        if(task.id === action.id){
          return {...task,listId: action.listId}
        }
        return {...task}
      })
    case Action.DELETE_TASK:
      let newArr = []
      state.forEach(task => {
        if(task.id !== action.id){
          newArr.push(task)
        }
      })
      return newArr;
    default : return state
  }
}
export default combineReducers({
  lists,
  tasks
})
