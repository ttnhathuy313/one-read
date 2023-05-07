import React from "react"
import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        navigate("/home");
    }
    return (
        <div className="max-w-sm inline-block">
            <Card id="mycard">
                <div className="text-2xl font-semibold text-white">
                    Sign in to OneRead
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                                className="text-white"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="example@student.fulbright.edu.vn"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                                className="text-white"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            placeholder="********"
                            required={true}
                        />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember" className="text-white">
                                Remember me
                            </Label>
                        </div>
                        <div className="flex justify-end text-sm font-normal">
                            <a href="https://www.figma.com/file/o7XIi56zQKk4M41V5g8UPy/SWE---Group3---Wireframes?node-id=703-18106&t=suxHzaLDkphIDDti-0" className="text-blue-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                    <div className="flex">
                        <div className="flex">
                            <div className="text-sm font-medium text-gray-500">
                                Don't have an account? <a href="sign-up" className="text-blue-500">Sign up</a>
                            </div>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default LoginForm