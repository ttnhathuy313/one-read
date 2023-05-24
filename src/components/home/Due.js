import React from "react";
import "./Due.css"

const readingList = [
    {
        id: 1,
        title: "The Odyssey",
        pagesLeft: 8,
        dueDate: "May 05, 2023",
        progress: 50
    },
    {
        id: 2,
        title: "Demian",
        pagesLeft: 4,
        dueDate: "May 06, 2023",
        progress: 29
    },
    {
        id: 3,
        title: "Life of Pi",
        pagesLeft: 10,
        dueDate: "May 08, 2023",
        progress: 77
    },
    {
        id: 4,
        title: "The Little Prince",
        pagesLeft: 3,
        dueDate: "May 08, 2023",
        progress: 95
    },
    {
        id: 5,
        title: "The Alchemist",
        pagesLeft: 7,
        dueDate: "May 9, 2023",
        progress: 36
    },
    {
        id: 6,
        title: "Science",
        pagesLeft: 11,
        dueDate: "May 10, 2023",
        progress: 12
    },
]

const Due = () => {
    return (
        <div>
            <div className="flex justify-between content-center">
                <div className="text-gray-50 text-2xl font-semibold">
                    Due this week
                </div>
                <a href="/reminders" className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                    View more
                </a>
            </div>
            <div className="my-scroll flex flex-nowrap shrink-0 overflow-x-auto gap-x-8 mt-5">
                {readingList.map((item) => (
                    <a href="/viewer/123" className="bg-gray-700 rounded-lg w-1/5 h-32 shrink-0 mb-3 hover:bg-teal-500 text-gray-400 hover:text-white" key={item.id}>
                        <div className="px-4 py-4 h-full w-full flex flex-col justify-between">
                            <div className="grid-rows-2">
                                <div className="text-base font-semibold">
                                    {item.title}
                                </div>
                                <div className="text-sm font-normal text-gray-500">
                                    Due {item.dueDate}
                                </div>
                            </div>
                            <div className="text-sm font-semibold bottom-0">
                                {item.pagesLeft} pages left
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Due;