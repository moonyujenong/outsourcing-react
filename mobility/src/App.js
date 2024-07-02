// import logo from './logo.svg';
import { lazy } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"))

function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </>
      </Routes>
    </Router>
  );
}

export default App;