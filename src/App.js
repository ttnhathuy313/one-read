import React from "react";
import LandingPage from "./components/landing-page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import AccountSetting from "./components/account-setting/AccountSetting";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/account-setting" element={<AccountSetting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
