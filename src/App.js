import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/getting-started" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
