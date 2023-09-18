import React, { useState } from 'react'

const Modal = (props) => {
    let [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }
  return (
    <section className='modal-bg'>
        <div className='modal'>
              <input onKeyDown={(e) => {
                  if (e.key === 'Enter' && input.trim() !== '') {
                      let copy = [...props.todo]
                      copy.push(input)
                      props.setTodo(copy)
                      props.setModal(false)
                  }
            }} type="text" onChange={onChange}/>      
              <div>
                  <button onClick={() => {
                      let copy = [...props.todo]
                      copy.push(input)
                      props.setTodo(copy)
                      props.setModal(false)
                  }}>Add</button>
                  <button onClick={()=> props.setModal(false)}>Back</button>
              </div>  
        </div>
    </section>
  )
}

export default Modal