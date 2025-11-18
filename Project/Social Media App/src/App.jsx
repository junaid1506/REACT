import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import InputPost from "./Component/InputPost";
import PostList from "./Component/PostList";
import SideBar from "./Component/SideBar";

function App() {
  return (
    <div className="app-container">
      <SideBar/>
     <div className="content">
      <Header/>   
      <InputPost/>
      <PostList/>
     <Footer/>
     </div>
     </div>
  );
}

export default App;
