const initialData = {
  taskItems : []
}

function taskReducer(state = initialData, action){
  
  switch(action.type){
    case 'ADD_TASK' : return{
      ...state,
      taskItems:[...state.taskItems, action.payload]
    }

    case 'DELETE_TASK' : return{
      ...state,
      taskItems:[...state.taskItems.filter((task)=>task!==action.payload)]
    }
  }
  
  return state;
}

export default taskReducer;