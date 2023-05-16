import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "flowbite-react";
import "./TopicsBody.css"

const topicData = [
    {
        id: 1,
        name: "Discrete Math",
        fileCounts: 7,
        progress: 50
    },
    {
        id: 2,
        name: "Data Structures",
        fileCounts: 4,
        progress: 29
    },
    {
        id: 3,
        name: "Algorithms",
        fileCounts: 10,
        progress: 77
    },
    {
        id: 4,
        name: "Spanish 101",
        fileCounts: 3,
        progress: 95
    },
    {
        id: 5,
        name: "Photo History",
        fileCounts: 7,
        progress: 36
    },
    {
        id: 6,
        name: "Computer Networks",
        fileCounts: 11,
        progress: 12
    },
    {
        id: 7,
        name: "Visual Study",
        fileCounts: 3,
        progress: 95
    },
]

const TopicsBody = () => {
    return (
        <div className="h-full">
            <div className="h-full bg-gray-900 flex flex-col">
                <div className="flex flex-row justify-between px-32 pt-8">
                    <div className="text-2xl font-semibold text-gray-50">
                        Your Topics
                    </div>
                </div>
                <div className="w-full px-32 pt-8 flex flex-row gap-x-7 shrink-0 flex-wrap grow-0 gap-y-7 content-start">
                    {topicData.map((item) => {
                        console.log(item.name)
                        return (
                            <div key={item.id} className="w-1/5 h-40 p-5 rounded-lg bg-gray-800 justify-between flex flex-col">
                                <div className="grid-rows-2">
                                    <div className="flex flex-row text-gray-300 hover:text-teal-500">
                                        <a href="?" className="text-xl font-semibold self-center grow">
                                            {item.name}
                                        </a>
                                        <a href="?">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </a>
                                    </div>
                                    <div className="text-base font-normal text-gray-400 self-end">
                                        {item.fileCounts} files
                                    </div>
                                </div>
                                <div className="grid-rows-2 pt-y-5">
                                    <div className="text-base font-normal text-gray-400 flex flex-row justify-end">
                                        <div> {item.progress}% </div>
                                    </div>
                                    <div aria-valuenow="77">
                                        <div className="w-full overflow-hidden rounded-full bg-gray-400 dark:bg-gray-700 h-1.5">
                                            <div className="flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100 space-x-2 bg-teal-500 h-1.5" style={{ width: item.progress + "%" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div >
    )
}

export default TopicsBody;