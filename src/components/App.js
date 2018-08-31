import React from 'react'
import BoardContainer from '../containers/BoardContainer'
import Header from './Header'

const App = () => (
  <div style={{padding: "15px"}} >
    <p>Trello demo - react/redux - By <a href="#">Pham Ngoc Chien</a></p>
    <hr className={"my-3"}/>
    <Header></Header>
    <BoardContainer ></BoardContainer>
  </div>
)

export default App
