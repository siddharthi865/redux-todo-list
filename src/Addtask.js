import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

export default function Addtask() {

  const [taskname, settaskname]=useState('');
  const dispatch = useDispatch();

  function addtask(){
    dispatch({type:'ADD_TASK', payload: taskname})
  }

  return (
    <div>
      <h1>Add Task Component</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <input type="text" className='form-control w-75' style={{display:'inline'}} value={taskname} placeholder="TaskName" onChange = {(e)=> {settaskname(e.target.value)}}/>
          <button className='btn btn-success' onClick={addtask}>ADD TASK</button>
        </div>
      </div>
    </div>
  )
}