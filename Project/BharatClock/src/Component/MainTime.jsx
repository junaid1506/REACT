function MainTime(){
 const today = new Date();
 const dateOnly = today.toLocaleDateString();
 const timeOnly = today.toLocaleTimeString();

  return(
    <p>This is the current time: {dateOnly} - {timeOnly} </p>
  )
}

export default MainTime;