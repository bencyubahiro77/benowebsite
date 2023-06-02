/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
// import Blog from './pages/Blog';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const location = useLocation();

  const shouldShowHeaderAndFooter = location.pathname !== '/register' && location.pathname !== '/login' ;

  return (
    <>
      {shouldShowHeaderAndFooter && <Header />}
      <main>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} />   */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
       <Footer />
    </>
  );
};

export default App;
