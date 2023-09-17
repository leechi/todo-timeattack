import React from 'react'


const Nav = (props) => {

    const setSort = () => {
        let copy = [...props.todo]
        copy.sort()
        props.setTodo(copy)
    }
  return (
    <nav>
      <h1>Leechi's Todo</h1>
      <div>
        <button onClick={()=>props.setTodo([])}>Clear</button>
        <button onClick={setSort}>Sort</button>
      </div>
    </nav>
  )
}

export default Nav