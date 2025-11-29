const redux =  require('redux')
const reducer = (store = 0 , action)=>{
  let newStore =  store
  if(action.type === 'INCRIMENT'){
      newStore = store + 1
  }
  return newStore 
}
const store =  redux.createStore(reducer)
const subcriber = ()=>{
  const state =  store.getState()
  console.log(state)
}

store.subscribe(subcriber)
store.dispatch({type:'INCRIMENT'})