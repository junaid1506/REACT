import AppName from "./Component/AppName"
import EnterTodo from "./Component/EnterTodo"
import MainTodo from "./Component/MainTodo"
import "./App.css"

function App() {

  return (
    <>
      <center className="todocontainer">
        <AppName/>
        <div className="center">
       <EnterTodo/>
      <MainTodo />
        <div  className="row">
          <div className="col-4">
            Go to Colloge
          </div>
          <div className="col-4">04/10/2023</div>
          <div className="col-2">
         <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div> </div>
      </center>
    </>
  )
}

export default App
