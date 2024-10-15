import { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback="..loading">
        <Routes>
          <>
            <Route path="/" element={<Main />} />
          </>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
