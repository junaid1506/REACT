function Hello(){


  let myName = "Junaid "
  let fullName = () => {
    return 'Junaid Ansari';
  }
  return (
    <p>I am your mentor {fullName()}</p>
  )
}
export default Hello;