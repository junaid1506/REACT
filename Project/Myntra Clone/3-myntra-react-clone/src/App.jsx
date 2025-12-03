import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeItem from "./Components/HomeItem";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="items-container">
          <HomeItem />
          <HomeItem />
          <HomeItem />
          <HomeItem />
          <HomeItem />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
