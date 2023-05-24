import React from "react";
import FullNavigationBar from "../FullNavigationBar";
import SectionBar from "../SectionBar";
import { Label, TextInput, Button } from "flowbite-react";

const ChangePassword = () => {
    return (
        <div className="max-h-screen h-screen overflow-y-auto overflow-x-hidden">
            <FullNavigationBar />
            <SectionBar />
            <div className=" bg-gray-900 h-screen w-screen pt-4 justify-center flex">
                <div id="ChangePasswordCard" className="gap-6 min-w-md">
                    <div className="text-gray-200 text-2xl font-semibold mb-4">
                        Change password
                    </div>
                    <form className="flex flex-col gap-2">
                        <div>
                            <div className="mb-2 block ">
                                <Label
                                    htmlFor="currentPassword"
                                    value="Current password"
                                    className="text-white"
                                />
                            </div>
                            <TextInput
                                id="currentPassword"
                                type="password"
                                required={true}
                                color="gray"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="newPassword"
                                    value="New password"
                                    className="text-white"
                                />
                            </div>
                            <TextInput
                                id="newPassword"
                                type="password"
                                required={true}
                            />
                        </div>

                        <div className=" gap-2 button-row mt-4">
                            <a
                                href="/change-password"
                                className="inline-flex items-center rounded-lg border border-gray-700 bg-gray-900 py-2 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            >
                                Forgot
                            </a>
                            <Button type="submit" className="bg-teal-500">Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword;