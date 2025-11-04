const ErrorMsg = ({items}) => {
  return <>{items.length === 0 ? <h3>I am still hungery</h3> : null}</>;
};

export default ErrorMsg;
