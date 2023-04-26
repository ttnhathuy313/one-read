import React from "react";
import LandingPage from "./components/landing-page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
