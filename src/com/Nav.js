import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import pic from '../images/pic.png'
import play from '../images/play.png'
import whine from '../images/wline.png'
import About from "./About";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <nav className="container mx-auto relative fixed z-10">

                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-18 p-5">
                        <div className="flex items-center ">

                            <div className="flex-shrink-0">
                                <h1 className="text-4xl font-serif text-white">RST</h1>
                            </div>

                            <div className="md:mx-20 flex justify-between ">
                                <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a
                                        href="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-md font-medium"
                                    >
                                        About
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                    >
                                        Menu
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                    >
                                        Blogs
                                    </a>

                                    <a
                                        href="/"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                    >
                                        Contact
                                    </a>

                                  </div>
                                </div>
                            </div>
                        </div>

                        <div className=" hidden md:block flex-shrink items-center">
                                <button className="px-8 py-2  text-white focus-within:ring-2 focus-within:outline-none border
                          focus-within:border-white uppercase">Appointment</button>

                            </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800
                                focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="h-8 w-8 py-1 text-white rounded-full bg-red-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="/"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </a>

                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Menu
                                </a>

                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Blogs
                                </a>

                                <a
                                    href="/"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </a>
                            </div>

                            <div className="pb-3">
                                <button className=" px-5 py-2 text-white focus-within:ring-2 focus-within:outline-none border
                                           focus-within:border-white uppercase">Appointment</button>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

                <div className=" relative -top-24 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2" >

                        <div className="bg-gray-900 ">
                            <div className="grid grid-cols-1 text-left my-20 mx-5 ">

                                <div className="p-10 md:text-left ">

                                <div className="flex pt-8">
                                    <div>
                                      <img src={whine} alt="underline" className="pt-4"/>
                                     </div>
                                    <h2 className="pl-5 uppercase text-white text-xl md:text-md tracking-wider font-mono">Restaurant</h2>
                                </div>
                                <h3 className=" pt-6 text-5xl sm:text-7xl md:text-5xl lg:text-7xl pr-5 italic
                                    text-white uppercase tracking-wider font-serif">
                                    Top Service Cuisine </h3>

                                <div className=" pt-10">
                                    <button className="text-white bg-red-400 py-2 px-10 uppercase ">See Menu</button>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="p-48 sm:p-72 md:p-64 lg:p-64 xl:p-64"  style={{ backgroundImage: `url(${pic})`,overflow:'hidden',
                            backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:"cover"}}>

                            <div className="flex-shrink-0 w-24 h-24">
                                <img src={play} className="" alt="play"/>
                            </div>

                        </div>
                </div>
                </div>

            <About/>

        </div>
    );
}

export default Nav;