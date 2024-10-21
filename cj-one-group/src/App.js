import { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

const Main = lazy(() => import("./pages/Main"));
const About = lazy(() => import("./pages/About"));
const Brunch = lazy(() => import("./pages/Brunch"));
const People = lazy(() => import("./pages/People"));

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/branch" element={<Brunch />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
