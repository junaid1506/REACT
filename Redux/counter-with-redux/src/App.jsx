import "./App.css";
import Cointainer from "./Component/Cointainer";
import Controls from "./Component/Controls";
import CounterDisplay from "./Component/CounterDisplay";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Cointainer>
        {" "}
        <Header />
        <div className="col-lg-6 mx-auto">
          <CounterDisplay />
          <Controls />
        </div>{" "}
      </Cointainer>
    </center>
  );
}

export default App;
