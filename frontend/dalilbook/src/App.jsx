import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/NavBar/Navbar';
import Topic from './pages/Topic';
import Videos from './pages/Videos';
import TopicPage from './pages/TopicPage/TopicPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/topics" element={<Topic />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/topicpage" element={<TopicPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App