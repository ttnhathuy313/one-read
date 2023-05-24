import React from "react";
import LandingPage from "./components/landing-page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AccountSetting from "./components/account-setting/AccountSetting";
import Topics from "./components/topics/Topics";
import Supports from "./components/supports/Supports.js";
import ChangePassword from "./components/change-password/ChangePassword";
import Viewer from "./components/viewer/Viewer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account-setting" element={<AccountSetting />} />
        <Route path="/your-topics" element={<Topics />} />
        <Route path="/viewer/:id" element={<Viewer />} />
        <Route path="/supports" element={<Supports />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
