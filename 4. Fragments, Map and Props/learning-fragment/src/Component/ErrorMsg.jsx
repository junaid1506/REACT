const ErrorMsg = ({items}) => {
  return <>{items.length === 0 ? <h3 style={{textAlign:"center"}}>Your Item list is empty</h3> : null}</>;
};

export default ErrorMsg;
