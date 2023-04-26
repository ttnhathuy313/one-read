import React from "react";
import { Table, Checkbox, Progress } from "flowbite-react";
import "./RecentTable.css"

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

const RecentTable = () => {
    return (
        <div>
            <div className="flex items-center gap-x-6">
                <div className="text-2xl font-semibold text-gray-50 grow">
                    Recent Files
                </div>
                <a href="idk" className="text-sm font-medium text-gray-400 hover:text-teal-500">
                    Recent
                </a>
                <a href="idk" className="text-sm font-medium text-teal-500 border-teal-500 border-b-2 h-full">
                    In Progress
                </a>
                <a href="idk" className="text-sm font-medium text-gray-400 hover:text-teal-500">
                    Completed
                </a>
            </div>
            <Table hoverable={true} className="mt-5 rounded-xl overflow-y-auto" id="mytable">
                <Table.Head id="mytable">
                    <Table.HeadCell className="text-gray-300">
                        Last Visit
                    </Table.HeadCell>
                    <Table.HeadCell className="text-gray-300">
                        File Name
                    </Table.HeadCell>
                    <Table.HeadCell className="text-gray-300">
                        Pages Left
                    </Table.HeadCell>
                    <Table.HeadCell className="text-gray-300">
                        Status
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body id="mytable">
                    {readingList.map((item) => (
                        <Table.Row key={item.id} id="mytable">
                            <Table.Cell className="text-gray-300">
                                {item.dueDate}
                            </Table.Cell>
                            <Table.Cell className="text-gray-300">
                                {item.title}
                            </Table.Cell>
                            <Table.Cell className="text-gray-300">
                                {item.pagesLeft}
                            </Table.Cell>
                            <Table.Cell className="text-gray-300">
                                <Progress progress={item.progress} size="sm" />
                            </Table.Cell>
                            <Table.Cell>
                                <a href="idk" className="text-sm font-medium text-gray-400 hover:text-teal-500">
                                    Edit
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default RecentTable;