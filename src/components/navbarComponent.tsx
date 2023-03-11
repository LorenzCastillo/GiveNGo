// 3rd Party Imports
import Image from "next/image";
import Link from "next/link";
import React from "react";
// Local Imports
import { changeDisplay, revertDisplay } from "@/backend/changeDisplay";
import giveNGoLogo from "@/images/GiveNGoLogo.png";
import hamburgerIcon from "@/images/Hamburger_Icon.png";
import profilePictureIcon from "@/images/Profile_Picture_Icon.png";
import exitIcon from "@/images/Exit_Icon.png";

interface Props {
    isPostedItemsPage?: boolean;
    isSavedItemsPage?: boolean;
    isDonatePage?: boolean;
    isEditItemsPage?: boolean;
}

export default function Navbar(props: Props) {
    return (
        <>
            <div id="navbarBackground" className="z-10">
                <div className="flex ml-[15%] mr-[15%] h-28 items-center">
                    <div className="flex-1 sm:flex md:flex lg:flex-none">
                        {/* Web Logo */}
                        <Link href="/">
                            <Image
                                src={giveNGoLogo}
                                className="h-max w-56"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <div className="hidden flex-1 lg:flex">
                        {/* Home Button */}
                        <button className="ml-12 p-2 px-2">
                            <Link href="/postedItemsPage">
                                {props.isPostedItemsPage ? (
                                    <h1 className="select-none font-lato-bold text-custom-orange decoration-custom-orange text-2xl tracking-wider underline-offset-4 underline">
                                        Home
                                    </h1>
                                ): (
                                    <h1 className="select-none font-lato-bold text-white text-2xl tracking-wider underline-offset-4 hover:underline">
                                        Home
                                    </h1>
                                )}

                            </Link>
                        </button>
                        {/* Saved Button */}
                        <button className="ml-12 p-2 px-2">
                            <Link href="/savedItemsPage">
                                {props.isSavedItemsPage ? (
                                    <h1 className="select-none font-lato-bold text-custom-orange decoration-custom-orange text-2xl tracking-wider underline-offset-4 underline">
                                        Saved
                                    </h1>
                                ): (
                                    <h1 className="select-none font-lato-bold text-white text-2xl tracking-wider underline-offset-4 hover:underline">
                                        Saved
                                    </h1>
                                )}
                            </Link>
                        </button>

                        {/* Donate Button */}
                        <button className="ml-12 p-2 px-2">
                            <Link href="/donatePage">
                                {props.isDonatePage ? (
                                    <h1 className="select-none font-lato-bold text-custom-orange decoration-custom-orange text-2xl tracking-wider underline-offset-4 underline">
                                        Donate
                                    </h1>
                                ): (
                                    <h1 className="select-none font-lato-bold text-white text-2xl tracking-wider underline-offset-4 hover:underline">
                                        Donate
                                    </h1>
                                )}
                            </Link>
                        </button>

                    </div>

                    {/* Profile Pictire Icon */}
                    <div className="select-none hidden lg:flex">
                        <Link href="/profilePage">
                            <Image
                                src={profilePictureIcon}
                                className="min-h-max w-20"
                                alt="Profile Picture"
                            />
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <div id="hamburgerIcon" className="select-none flex lg:hidden">
                        <button onClick={() => changeDisplay()}>
                            <Image
                                src={hamburgerIcon}
                                className="min-h-max w-10"
                                alt="Hamburger Icon"
                            />
                        </button>
                    </div>

                    {/* Exit Icon */}
                    <div id="exitIcon" className="select-none hidden">
                        <button onClick={() => revertDisplay()}>
                            <Image
                                src={exitIcon}
                                className="min-h-max w-10"
                                alt="Hamburger Icon"
                            />
                        </button>
                    </div>
                </div>
                {/* If the Hamburger Icon is clicked */}

                {/* Hamburger Navigation */}
                <div className="fixed z-10">
                    <div id="mobileContent" className="select-none hidden w-screen h-screen">
                        <div className="flex flex-col bg-custom-dark_grey">
                            <button className="h-36">
                                <Link href="/postedItemsPage">
                                    {props.isPostedItemsPage ? (
                                        <div className="flex w-screen h-36 items-center justify-center border-y-2 border-gray-700 bg-custom-orange">
                                            <h1 className="select-none font-lato-bold text-white text-custom-white text-4xl tracking-wider">HOME</h1>
                                        </div>
                                    ): (
                                        <div className="flex w-screen h-36 items-center justify-center border-y-2 border-gray-700 bg-custom-dark_grey">
                                            <h1 className="select-none font-lato-bold text-white text-custom-white text-4xl tracking-wider">HOME</h1>
                                        </div>
                                    )}
                                </Link>
                            </button>
                            <button className="h-36">
                                <Link href="/savedItemsPage">
                                    {props.isSavedItemsPage ? (
                                        <div className="flex w-screen h-36 items-center justify-center border-b-2 border-gray-700 bg-custom-orange">
                                            <h1 className="select-none font-lato-bold text-white text-custom-blue text-4xl tracking-wider">SAVED</h1>
                                        </div>
                                    ): (
                                        <div className="flex w-screen h-36 items-center justify-center border-b-2 border-gray-700 bg-custom-dark_grey">
                                            <h1 className="select-none font-lato-bold text-white text-custom-blue text-4xl tracking-wider">SAVED</h1>
                                        </div>
                                    )}
                                </Link>
                            </button>

                            <button className="h-36">
                                <Link href="/donatePage">
                                    {props.isDonatePage ? (
                                        <div className="flex w-screen h-36 items-center justify-center border-b-2 border-gray-700 bg-custom-orange">
                                            <h1 className="select-none font-lato-bold text-white text-custom-white text-4xl tracking-wider">DONATE</h1>
                                        </div>
                                    ): (
                                        <div className="flex w-screen h-36 items-center justify-center border-b-2 border-gray-700 bg-custom-dark_grey">
                                            <h1 className="select-none font-lato-bold text-white text-custom-white text-4xl tracking-wider">DONATE</h1>
                                        </div>
                                    )}
                                </Link>
                            </button>

                            <button className="h-36">
                                <Link href="/editItemsPage">
                                    {props.isEditItemsPage ? (
                                        <div className="flex w-screen h-36 items-center justify-center border-b-2 border-gray-700 bg-custom-orange">
                                            <h1 className="select-none font-lato-bold text-white text-custom-white text-4xl tracking-wider">PROFILE</h1>
                                        </div>
                                    ): (
                                        <div className="flex w-screen h-36 items-center justify-center border-b-2 border-gray-700 bg-custom-dark_grey">
                                            <h1 className="select-none font-lato-bold text-white text-custom-white text-4xl tracking-wider">PROFILE</h1>
                                        </div>
                                    )}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/* End of Hamburger Navigation */}
            </div>
        </>
    );
}