import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// layouts
import MainLayout from './layouts/MainLayout';

// pages
import Main from './pages/main_page/Main';
import Dislike from './pages/dislike_page/Dislike';
import Dream from './pages/introduce_page/Dream';
import Family from './pages/introduce_page/Family';
import Study from './pages/introduce_page/Study';
import Animal from './pages/like_page/Animal';
import Food from './pages/like_page/Food';
import Music from './pages/like_page/Music';
import Drawing from './pages/hobby_page/Drawing';
import Guitar from './pages/hobby_page/Guitar';
import Watching from './pages/hobby_page/Watching';
import Game from './pages/hobby_page/Game';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/family" element={<Family />} />
          <Route path="/dream" element={<Dream />} />
          <Route path="/study" element={<Study />} />
          <Route path="/dislike" element={<Dislike />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/food" element={<Food />} />
          <Route path="/music" element={<Music />} />
          <Route path="/drawing" element={<Drawing />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/watching" element={<Watching />} />
          <Route path="/game" element={<Game />} />
      </Route>
    </Routes>
  );
};

export default App;