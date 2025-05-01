import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/styles/ui/animationOnLoad.css';
import './components/styles/ui/animationOnView.css';
import './components/styles/ui/animationOnViewCard.css';
import './components/styles/ui/tooltip.css';

import Header from './components/templates/header.jsx';
import Hero from './components/templates/hero.jsx';
import Aboutme from './components/templates/aboume.jsx';
import Process from './components/templates/process.jsx';
import Blog from './components/templates/blog.jsx';
import Blogpage from './components/templates/blogPage.jsx';

function App() {
  return (
    <div className="whole">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Aboutme />
              <Process />
              <Blog />
            </>
          }
        />
        <Route path="/blogPage/:dayId" element={<Blogpage />} />
      </Routes>
    </div>
  );
}

export default App;
