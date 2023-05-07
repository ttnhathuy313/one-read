import React from "react";
import Due from "./Due";
import RecentTable from "./RecentTable";

const Home = () => {
    return (
        <div className="h-full">
            <div className="w-screen h-fit bg-gray-900">
                <div className="px-32 flex flex-col justify-start pt-8 gap-y-8">
                    <Due />
                    <RecentTable />
                </div>
            </div>
        </div>
    )
}

export default Home;