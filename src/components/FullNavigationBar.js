import React from "react";
import { Navbar } from "flowbite-react";
import SearchBar from "./home/SearchBar";
import { useNavigate } from "react-router-dom";

const FullNavigationBar = () => {
    const navigator = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        navigator('/')
    }
    return (
        <Navbar
            fluid={true}
            id="navbar"
            className="custom-navbar">
            <div className="flex w-full items-center gap-x-5">
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        OneRead
                    </span>
                </Navbar.Brand>
                <div className="grow">
                    <div className="Search Bar">
                        <SearchBar />
                    </div>
                </div>
                <div className="text-sm font-medium text-gray-400">
                    Testing User
                </div>
                <div className="text-sm font-medium text-blue-500 hover:text-blue-600">
                    <a href="/account-setting">
                        Account Setting
                    </a>
                </div>
                <div className="separator" style={{
                    width: '21px',
                    height: '0px',
                    border: '1px solid #374151',
                    transform: 'rotate(90deg)',
                }}>
                </div>
                <div className="text-sm font-medium text-blue-500 hover:text-blue-600">
                    <a href="/account-setting" onClick={handleClick}>
                        Log Out
                    </a>
                </div>
            </div>

        </Navbar>
    )
}

export default FullNavigationBar;