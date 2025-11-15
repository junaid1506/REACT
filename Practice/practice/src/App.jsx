import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current: {count}</h2>
      <h3>Previous: {previousCount.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
export default App;