import { useState } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Todo from './components/Todo';
import Modal from './components/Modal';
function App() {
  let [todo, setTodo] = useState(['안녕', '메롱'])
  let [modal, setModal] = useState(false)
  return (
    <div className="App">
      <Nav todo={todo} setTodo={setTodo}></Nav>
      <Todo todo={todo} setTodo={setTodo} modal={modal} setModal={setModal}></Todo>
      { modal === true ? <Modal todo={todo} setTodo={setTodo} modal={modal} setModal={setModal}></Modal> : null }
    </div>
  );
}



export default App;
