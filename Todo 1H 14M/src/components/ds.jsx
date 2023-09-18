import React, { useState } from 'react'

const Todo = (props) => {

  let [edit, setEdit] = useState(props.todo.map(() => false))
  let [change, setChange] = useState('')
  let [check, setCheck] = useState(props.todo.map(()=>false));

  return (
    <div>
      
       
            <div className='todo'>
              <ul>
                   {props.todo.map((data,i)=>(
                    <li>
                                <span>
                                    {data}
                                    </span>
                        <span style={{ marginLeft: '150px' }}>📝</span>
                        <span style={{ marginLeft: '10px' }}>🗑</span>
                       </li>
                       ))}
              </ul>
              <button onClick={() =>{props.setModal(true)}}>+ New task</button>
            </div>
        
      
    </div>
  )
}

export default Todo