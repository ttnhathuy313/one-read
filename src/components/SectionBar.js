import React from "react";

function normalize(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}

const SectionBar = ({ chosen }) => {
    const sections = ['Home', 'All Files', 'Your Topics', 'Vocab Hub', 'Reminder Area', 'Support']
    console.log(chosen === sections[0])
    return (
        <div>
            <div className="flex items-center justify-start w-full h-11 bg-gray-700 space-x-10 px-8">
                {sections.map((section) => (
                    <div key={section}>
                        {
                            chosen === section ?
                                <a href={`/${normalize(section)}`} className="text-teal-500 font-medium text-sm" key={section}>
                                    {section}
                                </a>
                                :
                                <a href={`/${normalize(section)}`} className="text-gray-100 font-medium text-sm hover:text-teal-500" key={section}>
                                    {section}
                                </a>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionBar;