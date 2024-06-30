// import logo from './logo.svg';
import { lazy } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Home />} /> 
        </>
      </Routes>
    </Router>
  );
}

export default App;
