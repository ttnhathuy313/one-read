import React from "react";
import FullNavigationBar from "./FullNavigationBar";
import SectionBar from "./SectionBar";
import Home from "./Home";
const DashBoard = () => {
    return (
        <div className="overflow-y-auto">
            <FullNavigationBar />
            <SectionBar />
            <Home />
        </div>
    )
}
export default DashBoard;