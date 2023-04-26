import React from "react";

const SectionBar = () => {
    return (
        <div>
            <div className="flex items-center justify-start w-full h-11 bg-gray-700 space-x-10 px-8">
                <div className="text-sm font-medium text-teal-500">
                    Home
                </div>
                <a href="/all-files" className="text-sm font-medium text-gray-100 hover:text-teal-500">
                    All Files
                </a>
                <a href="/topics" className="text-sm font-medium text-gray-100 hover:text-teal-500">
                    Your Topics
                </a>
                <a href="/vocabs" className="text-sm font-medium text-gray-100 hover:text-teal-500">
                    Vocab Hub
                </a>
                <a href="/reminders" className="text-sm font-medium text-gray-100 hover:text-teal-500">
                    Reminder Area
                </a>
                <a href="/faq" className="text-sm font-medium text-gray-100 hover:text-teal-500">
                    Support
                </a>
            </div>
        </div>
    );
}

export default SectionBar;