import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import BlogDetail from './components/Blogs/BlogDetail/BlogDetail';
import SideContainer from './components/SideContainer/SideContainer';
import RouteNotFound from './components/CodePages/RouteNotFound';
import Posts from './components/Posts/Posts';
import PostDetail from './components/Posts/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className='seperator' />
      <div className='body'>
        <div className='main-view'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<BlogDetail />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="*" element={<RouteNotFound />}></Route>
          </Routes>
        </div>
        <SideContainer />
      </div>
    </div>
  );
}

export default App;
