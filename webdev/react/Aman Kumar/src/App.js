import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Compnent/Navbar';
import FetchApi from './Compnent/FetchApi';
import Footer from './Compnent/Footer';

const App = () => {
  return (
   <>
   <Navbar/>
   <FetchApi/>
   <Footer/>
    {/* <Router>
      <Navbar/>
      <FetchApi/>
      <Routes>
        <Route  path="/general" element={<FetchApi cat="general"/> }/>
        <Route  path="/sport" element={<FetchApi cat="sport"/> }/>
        <Route  path="/technology" element={<FetchApi cat="technology"/> }/>
        <Route  path="/busniness" element={<FetchApi cat="business"/> }/>
      </Routes>
      
    </Router> */}
   
   </>
  );
};

export default App
