import {  useState } from "react";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import InputPost from "./Component/InputPost";
import PostList from "./Component/PostList";
import SideBar from "./Component/SideBar";

function App() {
  const [currentNav, setCurrentNav] = useState('Home')
  let NavHome = ()=>{
    setCurrentNav('Home')
  }
  let NavCreatePost = ()=>{
      setCurrentNav('Current Post')
  }
  return (
    <div className="app-container">
      <SideBar currentNav={currentNav}  NavHome={NavHome} NavCreatePost={NavCreatePost}/>
      <div className="content">
        <Header />
        <div className="main-content"></div>
      {currentNav === 'Home' ? <PostList /> :  <InputPost />}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
