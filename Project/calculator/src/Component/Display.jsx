// import React from 'react'
import styles from './Display.module.css'


const Display = ({display }) => {


  return (
    // <div class={`overflow-x-auto ${styles.display}`}>{display}</div>
    <input className={styles.display} value= {display}  placeholder='Enter Your Digit' readOnly/>
     
   
  )
}

export default Display