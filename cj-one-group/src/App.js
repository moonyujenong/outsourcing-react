import { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const About = lazy(() => import("./pages/About"));
const Brunch = lazy(() => import("./pages/Brunch"));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/branch" element={<Brunch />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
