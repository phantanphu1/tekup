import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import HomePage from './page/home';
function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
