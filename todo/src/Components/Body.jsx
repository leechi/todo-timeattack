import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Modal from './Modal'

const Body = () => {
    const [modal, setModal] = useState(false)
    const [todo, setTodo]  = useState(['안녕', '반가워'])
  return (
      <div>
          <Header todo={todo} setTodo={setTodo} modal={modal} setModal={setModal}></Header>
          <Main todo={todo} setTodo={setTodo} modal={modal} setModal={setModal}></Main>
          { modal === true ? <Modal todo={todo} setTodo={setTodo} modal={modal} setModal={setModal}></Modal> : null }
    </div>
  )
}

export default Body