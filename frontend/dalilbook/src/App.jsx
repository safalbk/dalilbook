import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/NavBar/Navbar';
import Topic from './pages/Topic';
import Videos from './pages/Videos';
import TopicPage from './pages/TopicPage/TopicPage';
import AllListPage from './pages/HomePages/AllListPage';
import TopicsListPage from './pages/HomePages/TopicsListPage';
import VideoListPage from './pages/HomePages/VideosListPage';
import ImagesListPage from './pages/HomePages/ImagesListPage';
import NotesListPage from './pages/HomePages/NotesListPage';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import ThumGenerator from './components/ThubnailGenerator/ThumGenerator';
import VideoFrameCapture from './components/ThubnailGenerator/VideoFrameCapture';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<AllListPage />} />
            <Route path="alltopics" element={<TopicsListPage />} />
            <Route path="allvideos" element={<VideoListPage />} />
            <Route path="allnotes" element={<NotesListPage />} />
            <Route path="allimages" element={<ImagesListPage />} />

          </Route>

          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/topics" element={<Topic />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/topicpage" element={<TopicPage />} />

          <Route path="/videopage/:id" element={<VideoPlayerPage />} />
          <Route path="/tum" element={<VideoFrameCapture />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App