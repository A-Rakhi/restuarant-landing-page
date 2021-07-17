import React from 'react';
import social from '../images/social.png';
import whine from "../images/wline.png";
import underline from '../images/underln.png'
import {BrowserRouter as Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className=" container mx-auto px-3 sm:px-0">

                    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 ">

                        <div className=" bg-gray-600">

                            <div className="py-10 md:pl-24 sm:pl-24 lg:pl-24 xl:pl-24 pl-8">

                                <div className="flex flex-row pl-5 pt-2.5">
                                    <div className="md:pt-4 pt-4">
                                        <img src={whine} alt="underline" />

                                    </div>
                                    <div >
                                        <h2 className="text-white pl-5 text-md md:text-base uppercase">Appointment</h2>

                                    </div>
                                </div>

                                <h3 className="pt-7 text-white pl-4 text-5xl md:text-4xl
                            capitalize font-serif">Reservation</h3>

                                <button className="focus-within:ring-2 focus-within:outline-none border
                                  focus-within:border-white rounded-lg text-white md:my-10 lg:my-10 m-5
                                  md:py-3 lg:py-3 py-3 md:px-8 lg:px:8px px-8">
                                    CONTACT US</button>
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-50 py-10">
                                    <div className="pl-24">
                                        <div className="flex flex-row pl-5 pt-2.5">
                                            <div className="md:pt-4 pt-4">
                                                <img src={underline} alt="underline" />

                                            </div>
                                            <div >
                                                <h2 className=" pl-5 text-md md:text-base uppercase">Delivery</h2>

                                            </div>
                                        </div>

                                        <h3 className="pt-7 pl-4 text-5xl md:text-4xl
                                             capitalize font-serif">Order Now</h3>

                                        <button className="focus-within:ring-2 focus-within:outline-none border
                                             border:border-black rounded-lg md:my-10 lg:my-10 m-5
                                               md:py-3 lg:py-3 py-3 md:px-8 lg:px:8px px-8">CONTACT US</button>
                                        </div>


                                {/*<h3 className="text-lightBlack font-bold text-xl oldstyle-nums ">*/}
                                        {/*    +1 (234) 567-89-02</h3>*/}
                                        {/*<h4 className="pt-7 text-gray-500 text-md ">*/}
                                        {/*    Opening Hours</h4>*/}
                                        {/*<h3 className="text-lightBlack text-base">*/}
                                        {/*    9:00am – 10:00pm</h3>*/}
                                    </div>
                            </div>
                        </div>

                    </div>

            {/*footer-sec-start*/}

            <div className="bg-gray-800 md:-mt-16">

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1
                container text-white md:pb-16 lg:pb-16  md:pt-36 lg:pt-36 py-16">

                    <div  className="md:pl-36 pl-16 text-4xl pb-16 pt-5 md:pb-1 font-serif ">
                        <Link to="/ " className="" >RST</Link>
                    </div>

                    <div className="md:pl-20 pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5">
                            <div className="md:p-2 pb-4 text-gray-200 text-xl pb-8">Menu</div>
                            <div className="md:p-2 text-gray-400 py-1">About</div>
                            <div className="md:p-2  text-gray-400 py-1">Menu</div>
                            <div className="md:p-2  text-gray-400 py-1">BLog</div>
                            <div className="md:p-2  text-gray-400 py-1">Contact</div>
                        </div>
                    </div>
                    <div className="md:pl-20 pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5">
                            <div className="md:p-2 pb-4 text-gray-200 text-xl pb-8">Service</div>
                            <div className="md:p-2 py-1 text-gray-400">Food</div>
                            <div className="md:p-2 py-1 text-gray-400">Delivery</div>
                            <div className="md:p-2 py-1 text-gray-400">Catering</div>
                            <div className="md:p-2 py-1 text-gray-400">Book</div>
                        </div>
                    </div>
                    <div className=" pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5">
                            <div className="md:p-2 pb-4 text-white text-xl">Social</div>
                            <div>
                                <img src={social} alt="social-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="" style={{ border: '0.5px solid gray' }} />

                <footer className=" flex md:flex-row flex-col md:py-10 lg:py-10 py-8">

                    <div className="flex-1 bd-highlight px-28 lg:px-32 xl:px-32 md:px-24 sm:text-center">
                        <div className="leading-loose flex-grow-1 bd-highlight text-gray-500">
                            Copyright © 2020. All Rights Reserved.
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-row md:px-24 px-8 py-5 md:py-0 justify-between">
                        <p className=" text-gray-400 tracking-tighter" >Terms of Use</p>
                        <p className=" text-gray-400  md:pl-10 pl-32 tracking-tighter">Privacy Policy</p>
                    </div>
                </footer>

            </div>
        </div>
    );
}
export default Footer;
