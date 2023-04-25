import React from "react";
import LoginForm from "./LoginForm";
import "./LandingPage.css";
import Introduction from "./Introduction";
import NavigationBar from "./NavigationBar";

const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <div className="bg-gray-900 w-screen h-screen overflow-hidden px-32">
                <div className="center-card flex items-start justify-between flex-nowrap"> 
                    <Introduction />
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;