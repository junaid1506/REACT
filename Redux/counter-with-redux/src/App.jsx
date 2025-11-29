import "./App.css";
import CounterDisplay from "./Component/CounterDisplay";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        {" "}
        <Header />
        <div className="col-lg-6 mx-auto">
          <CounterDisplay />
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>{" "}
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default App;
