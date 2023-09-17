import { useState } from 'react';
import React from 'react'
import './App.scss';
import Nav from './components/Nav';
import Todo from './components/Todo';
import Modal from './components/Modal';


function App() {
  let [modal, setModal] = useState(false)
  let [todo, setTodo] = useState(['안녕','방가'])
  return (
    <div className="App">
      <Nav todo={todo} setTodo={setTodo}></Nav>
      <Todo setTodo={setTodo} todo={todo} setModal={setModal} modal={modal}></Todo>
      { modal == true ? <Modal setTodo={setTodo} todo={todo}  setModal={setModal} modal={modal}></Modal> : null }
    </div>
  );
}

export default App;
