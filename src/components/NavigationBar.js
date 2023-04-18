import React from "react";
import { Button } from "flowbite-react";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <div className="flex flex-wrap gap-2">
            <div>
                <Button>
                    Default
                </Button>
            </div>
            <div>
                <Button color="gray">
                    Gray
                </Button>
            </div>
            <div>
                <Button color="dark">
                    Dark
                </Button>
            </div>
            <div>
                <Button color="light">
                    Light
                </Button>
            </div>
            <div>
                <Button color="success">
                    Success
                </Button>
            </div>
            <div>
                <Button color="failure">
                    Failure
                </Button>
            </div>
            <div>
                <Button color="warning">
                    Warning
                </Button>
            </div>
            <div>
                <Button color="purple">
                    Purple
                </Button>
            </div>
        </div>
    );
}

export default NavigationBar