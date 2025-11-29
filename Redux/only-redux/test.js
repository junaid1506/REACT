const redux =  require("redux")
const reducer = (store = 4 , action) =>{
  newStore =  store 
  if(action.type === "ADD"){
    newStore =  store + action.payload.number
  }
  return newStore
}


const store =  redux.createStore(reducer)

const subcriber = ()=>{
  const state =  store.getState()
  console.log(state)
}

store.subscribe(subcriber)

store.dispatch({type:"ADD", payload:{number : 7}})