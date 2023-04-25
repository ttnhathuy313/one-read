import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Introduction = () => {
    return (
        <div className="w-1/3 space-y-5 inline-block">
            <div className="text-teal-500 text-6xl leading-tight font-semibold"> 
                All your readings in one place
            </div>
            <div className="text-xl font-normal text-gray-400">
                Looking to improve your online reading experience? Look no further than OneRead! Our web app offers a unique suite of features designed to help you organize, read, and comprehend your digital materials like never before.
            </div>
            <div className="text-lg font-medium text-blue-500">
                <a href="/about">
                Read more about our app
                <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
                </a>
            </div>
        </div>
    );
}

export default Introduction;