import React from 'react'
import {useDispatch} from 'react-redux'

export default function Todoitem({task}) {

  const dispatch = useDispatch();
  function deletetask(task){
    dispatch({type:'DELETE_TASK', payload:task})
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <h1>{task}</h1>
        </div>
        <div className="col-md-1">
          <button className='btn-secondary'>EDIT</button>
        </div>
        <div className="col-md-1">
          <button className='btn-danger' onClick={()=>deletetask(task)}>DELETE</button>
        </div>
      </div>
    </div>
  )
}
