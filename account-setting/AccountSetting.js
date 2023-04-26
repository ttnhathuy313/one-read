import React from 'react';
import "./UserProfileCard.css";
import UserProfileCard from "./UserProfileCard";

const AccountSetting = () => {
    return (
        <div>
            <div className=" bg-gray-900 w-screen h-screen ">
                <div  className="flex justify-center"> 
                    <UserProfileCard />
                </div>
            </div>
        </div>
    )



}

export default AccountSetting;
 