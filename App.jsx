import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import CreatePost from './CreatePost';
import PostList from './PostList';
import { useState } from 'react';
import PostListProvider from './post-list-store';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
