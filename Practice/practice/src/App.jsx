import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Search..." />;
}
export default App;