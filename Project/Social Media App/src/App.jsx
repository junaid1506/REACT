import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import InputPost from "./Component/InputPost";
import PostList from "./Component/PostList";
import SideBar from "./Component/SideBar";
import PostListProvide from "./Store/post-list-store";

function App() {
  const [currentNav, setCurrentNav] = useState('Home')

  return (
    <PostListProvide>
    <div className="app-container">
      <SideBar currentNav={currentNav} setCurrentNav={setCurrentNav}    />
      <div className="content">
        <Header />
        <div className="main-content">
      {currentNav === 'Home' ? <PostList /> :  <InputPost />}
      </div>
        <Footer />
      </div>
    </div>
    </PostListProvide>
  );
}

export default App;
