import { useEffect } from "react";
import { useState } from "react";

function MainTime(){
 const [time,setTime] = useState(new Date());



 useEffect(()=>{
  const inetrValId =  setInterval(()=>{
    setTime(new Date())
  },1000)

  return ()=>{
    clearInterval(inetrValId)
  }

 },[])

  return(
    <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
  )
}

export default MainTime;