import React from "react";
import FullNavigationBar from "../FullNavigationBar";
import SectionBar from "../SectionBar";
import TopicsBody from "./TopicsBody";

const Topics = () => {
    return (
        <div className="h-screen overflow-y-auto overflow-x-hidden">
            <FullNavigationBar />
            <SectionBar chosen={'Your Topics'} />
            <TopicsBody />
        </div>
    )
}

export default Topics;