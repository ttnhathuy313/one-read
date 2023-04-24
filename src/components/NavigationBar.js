import React from "react";
import { Navbar, Button } from "flowbite-react";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <Navbar
        fluid={true}
        id="navbar"
        className="custom-navbar">
        <Navbar.Brand href="https://flowbite.com/">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            OneRead
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Button id="mybutton">
            Create Account
            </Button>
            <Navbar.Toggle />
        </div>
        </Navbar>
    );
}

export default NavigationBar