import React from "react";
import { Navbar, Button } from "flowbite-react";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand href="https://flowbite.com/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            OneRead
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Button>
            Create Account
            </Button>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link
            href="/navbars"
            active={true}
            >
            Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            About
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Services
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="/navbars">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar