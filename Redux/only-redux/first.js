const redux = require('redux')
const reducer =  (store,action)=>{
  return store; 
}
const store = redux.createStore(reducer)

const subcriber = ()=>{
  const state =  store.getState()
  console.log(state)
}

store.subscribe(subcriber)