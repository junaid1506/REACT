import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

function App() {
  const fetchAction = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      {fetchAction.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <FetchItems />

      <Footer />
    </>
  );
}

export default App;
