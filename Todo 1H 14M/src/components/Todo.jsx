import React, { useState } from 'react';

const Todo = (props) => {
    let [edit, setEdit] = useState(props.todo.map(() => false))
    let [change, setChange] = useState('')
    let [check, setCheck] = useState(props.todo.map(()=>false))
  const deleteTodo = (i) => {
    let copy = [...props.todo];
    copy.splice(i, 1);
      props.setTodo(copy);
      let copy1 = [...check];
      copy1.splice(i, 1);
      setCheck(copy1)
      let copy2 = [...edit];
      copy2.splice(i, 1);
      setEdit(copy2)
  };

    const editTodo = (i) => {
        let copy = [...edit]
        copy[i] = !copy[i]
        setEdit(copy)
    }
  return (
    <main>
          <section className='todo'>
              {props.todo.map((data, i) => (
                  <div className='todo__list'>
                      <div className='todo__header'>
                          <span className='todo__check' onClick={() => {
                              let copy = [...check]
                              copy[i] = !copy[i]
                              setCheck(copy)

                          }}></span>
                          {edit[i] === true ? <input onKeyDown={(e) => {
                              if (e.key == 'Enter') {
                                  let copy = [...props.todo]
                                  copy[i] = change
                                  props.setTodo(copy)
                                  let copy1 = [...edit]
                                  copy1[i] = false
                                setEdit(copy1)
                              }
                         }} onChange={(e)=> setChange(e.target.value)}  placeholder='Edit Todo'></input> : <p className={check[i] === true ? 'todo__text check' :'todo__text '}>{data}</p>} 
                      </div>
                      <div className='todo__updates'>
                          <span onClick={()=>editTodo(i)}>수정</span>
                          <span onClick={deleteTodo}>삭제</span>
                      </div>
                  </div>
              ))}
                  
      </section>
      <button className='new-task-btn' onClick={() => props.setModal(true)}>
        + New task
      </button>
    </main>
  );
};

export default Todo;
