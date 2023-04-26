import React from "react";
import Due from "./Due";
import RecentTable from "./RecentTable";

const Home = () => {
    return (
        <div className="w-screen h-screen bg-gray-900 overflow-y-auto">
            <div className="px-32 flex flex-col justify-start h-full pt-8 gap-y-8">
                <Due />
                <div style={{ overflowY: 'auto' }}>
                    <RecentTable />
                </div>
            </div>
        </div>
    )
}

export default Home;