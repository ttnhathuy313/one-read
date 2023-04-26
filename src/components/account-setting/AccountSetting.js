import React from 'react';
import "./UserProfileCard.css";
import UserProfileCard from "./UserProfileCard";
import FullNavigationBar from '../dashboard/FullNavigationBar';
import SectionBar from '../dashboard/SectionBar';

const AccountSetting = () => {
    return (
        <div>
            <FullNavigationBar />
            <SectionBar />
            <div className=" bg-gray-900 w-screen h-screen ">
                <div className="flex justify-center my-auto content-center items-center">
                    <UserProfileCard />
                </div>
            </div>
        </div>
    )



}

export default AccountSetting;
