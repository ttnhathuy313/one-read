import React from "react";
import LoginForm from "./LoginForm";
import "./LandingPage.css";
import Introduction from "./Introduction";

const LandingPage = () => {
    return (
        <div className="bg-gray-900 w-screen h-screen overflow-hidden px-32">
            <div className="mt-44 flex items-start justify-between"> 
                <Introduction />
                <LoginForm />
            </div>
        </div>
    )
}

export default LandingPage;