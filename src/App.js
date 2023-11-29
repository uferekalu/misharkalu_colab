import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';

function App() {
  return (
  <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </Layout>
  
  );
}

export default App;
