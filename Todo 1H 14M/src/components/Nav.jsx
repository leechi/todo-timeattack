import React from 'react'

const Nav = (props) => {
  return (
    <nav>
        <h1>Leechi's Todo</h1>

        <div>
              
              <button onClick={()=>props.setTodo([])}>Clear</button>
        <button onClick={() => {
          let copy = [...props.todo]
          copy.sort()
          props.setTodo(copy)
        }
          
        }>Sort</button>
        </div>
      </nav>
  )
}

export default Nav