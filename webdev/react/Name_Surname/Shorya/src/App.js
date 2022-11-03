import "./App.css";

import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="logo">
        <span className="click">The</span>
        <span className="on">News</span>
        <span className="n">EXPRESS</span>
      </div>

      <div className="cat">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
      <NewsContextProvider>
        <Routes>
          {/* <Route path='/'><News/></Route>
           */}
          <Route exact path="/" element={<News />}></Route>
          <Route exact path="/education" element={<News />}></Route>
          <Route
            exact
            path="/entertainment"
            element={<News category="entertainment" />}
          ></Route>
          <Route exact path="/sports" element={<News />}></Route>
          <Route exact path="/business" element={<News />}></Route>
          <Route exact path="/technology" element={<News />}></Route>
        </Routes>
        {/* <News /> */}
      </NewsContextProvider>
      <footer>
        <h4>Made with ❤️ by Shorya | 2022 &copy; All Rights Reserved</h4>
      </footer>
    </Router>
  );
}

export default App;
