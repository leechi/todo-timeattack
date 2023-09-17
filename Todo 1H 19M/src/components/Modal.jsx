import React from 'react'
import { useState } from 'react';

const Modal = (props) => {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  let [input, setInput] = useState('')
  const onChange = (e) => {
    setInput(e.target.value)
  }
  const addTodo = (e) => {
    // 왜 or이지 이따 생각해봐야겠다.
    if (input.trim() !== '' || e.key == "Enter"){
    let copy = [...props.todo]
    copy.push(input)
    props.setTodo(copy)
    props.setModal(false)
    } else {
      alert('입력하셈')
    }
  }
  
  const close = (e) => {
    if(e.target.className == 'modal-bg') props.setModal(false)
  }  
  
  return (
    <section onClick={close} className='modal-bg'>
      <form onSubmit={onSubmit}>
        <input onChange={onChange}type="text" placeholder='New Todo' />
        <div>
          <button onClick={addTodo} onKeyDown={addTodo}>Add</button>
          <button onClick={()=>{props.setModal(false)}} >Back</button>
          </div>
      </form>
    </section>
  )
}

export default Modal