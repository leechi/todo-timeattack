import React, { useState } from 'react'


const Todo = (props) => {
    let [editbtn, setEditBtn] = useState(props.todo.map(()=> false))
    let [check, setCheck] = useState(props.todo.map(() => false))
    let [editInput, setEditInput] = useState('')
    const deleteList = (i) => {
        let copy = [...props.todo]
        copy.splice(i, 1)
        props.setTodo(copy)
        let copycheck = [...check]
        copycheck.splice(i, 1)
        setCheck(copycheck)
    }

    const editList = (i) => {
        let copy = [...editbtn]
        copy[i] = !copy[i]
        setEditBtn(copy)
    }



    const checkList = (i) => {
        let copy = [...check]
        copy[i] = !copy[i]
        setCheck(copy)
    }

    const onChange = (e) => {
        setEditInput(e.target.value)
    }
  return (
    <main>
      <section className='todo'>
        <ul>
          {props.todo.map((data, i) => (
            <li>
            <div>
            <div onClick={()=>checkList(i)} className={ check[i] === true ? 'todo__check-list on' : 'todo__check-list'}></div>
                      {editbtn[i] === true ? <input onKeyDown={(e) => {
                          if (e.key == 'Enter' && editInput.trim() !== '') {
                              let copy = [...props.todo]
                                copy[i] = editInput
                                props.setTodo(copy)
                                let copy1 = [...editbtn];
                                copy1[i] = false;
                                setEditBtn(copy1);
                            }
                }} onChange={onChange} ></input>: <span className={check[i] === true ? 'todo__list line' :'todo__list'}>{data}</span>}
            </div>
            <div className='todo__btns'>
                <img onClick={()=>editList(i)} src="edit.png" /> 
              <img onClick={()=>deleteList(i)} src="delete.png" />
            </div>
          </li>
          ))}
          
        </ul>
      </section>
      <button onClick={()=>{props.setModal(true)}}> + New Task</button>
    </main>
  )
}
export default Todo