import React, { useState } from 'react'

const Main = (props) => {
    let [edit, setEdit] = useState(props.todo.map(() => false))
    let [check, setCheck] = useState(props.todo.map(() => false))
    let [change, setChange] = useState('')
    const deleteList = (i) => {
        let copy = [...props.todo]
        copy.splice(i, 1)
        props.setTodo(copy)
        let copy1 = [...edit]
        copy1.splice(i, 1)
        setEdit(copy1)
    }
    const editList = (i) => {
        let copy = [...edit]
        copy[i] = !copy[i]
        setEdit(copy)
    }
    const checkList = (i) => {
        
    }
   
  return (
      <main className='main'>
          <section className='todo'>
              {props.todo.map((data, i) => (
                  <li>
                      <div>
                          <span className='todo__check' onClick={
                              () => {
                                  let copy = [...check]
                                    copy[i] = !copy[i]
                                    setCheck(copy)
                              }
                        }></span>
                          {edit[i] === true ? <input 
                              onKeyDown={(e) => {
                                  if (e.key === 'Enter' && change.trim() !== '') {
                                      console.log('hi')
                                      let copy = [...props.todo]
                                      copy[i] = change
                                      props.setTodo(copy)
                                      let copy1 = [...edit]
                                      copy1[i] = false
                                      setEdit(copy1)
                                }
                              }}
                          onChange={(e) => (setChange(e.target.value))}></input> : <h4 className={check[i] == true ? 'todo__text lineT' : 'todo__text'}>{data}</h4>} 
                  </div>
                  <div>
                    <img onClick={()=> editList(i)} src="/edit.png" alt="" />
                   <img onClick={()=> deleteList(i)} src="/delete.png" alt="" />
                    </div>
                </li>
            ))}
              <button onClick={()=>props.setModal(true)}>+New Task</button>

          </section>
          
    </main>
  )
}
export default Main