import React from 'react'
import { useState } from 'react';
const Modal = (props) => {
  
  const [input, setInput] = useState('')
  const AddTodo = () => {
    let copy = [...props.todo]
    copy.push(input)
    props.setTodo(copy)
    props.setModal(false)
  }
  return (
    
    <section className='modal-bg'>
      <div className='modal'>
        <input type="text" placeholder='New Todo' onChange={(e) => { setInput(e.target.value) }} />
        <div>
          <button onClick={AddTodo}>Add</button>
          <button onClick={()=>{props.setModal(false)}}>Back</button>
        </div>
      </div>    
    </section>
  )
}

export default Modal