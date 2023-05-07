import React from "react";
import FullNavigationBar from "./FullNavigationBar";
import SectionBar from "../SectionBar";
import Home from "./Home";
const DashBoard = () => {
    return (
        <div className="max-h-screen h-screen overflow-y-auto overflow-x-hidden">
            <FullNavigationBar />
            <SectionBar chosen={'Home'} />
            <Home />
        </div>
    )
}
export default DashBoard;