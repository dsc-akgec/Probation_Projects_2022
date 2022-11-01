import React from 'react'
import News from './components/News'
import { NewsContextProvider } from './NewsContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './css/app.css';
import Top from './components/Top';
import Catpanel from './Catpanel';
import Sports from './components/Sports';
import Business from './components/Business';
import Politics from './components/Politics';
import Footer from './components/Footer';
import Social from './Social';

function App() {
  return( 
    
  <NewsContextProvider>
    
    <Top/>
    <Social/>
    <Catpanel/>
    
    <Routes>
          <Route path="/" element={<News/>}/>
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/politics" element={<Politics/>}/>
          
      </Routes>
      <Footer/>
    
  </NewsContextProvider>
  )
}


export default App