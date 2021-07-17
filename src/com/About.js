import React from 'react';
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import underline from '../images/underln.png';
import whine from "../images/wline.png";
import pic from "../images/pic.png";
import Features from "./Features";

function About () {
    return (

        <div className="container mx-auto">

        <div className="px-5 bg-white relative -top-36 pt-48">

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className=" lg:ml-8 relative md:h-auto md:mt-10">
                    <img src={pic1} className="z-0 md:z-20 relative w-72 md:w-64 lg:w-80 sm:w-96 sm:left-32 left-10 "  alt="pic"/>

                    <img src={pic2} className="z-10 md:z-40  w-36  left-1 sm:w-48 sm:top-36  md:top-28 lg:top-32
                            md:w-40 lg:w-44 xl:w-44 absolute  xl:top-32 md:left-14 lg:left-16 sm:left-20 top-32 "  alt="pic"/>

                            <img src={pic3} className="md:z-30 absolute md:w-36 sm:w-36 md:h-28 sm:left-56 left-20
                             md:left-44 w-36 h-28 lg:left-48 lg:w-36" alt="pic"/>
                </div>

                <div>
                    <div className="lg:px-20 xl:px-20 py-20 md:pl-24 pl-8 pt-44 sm:pt-44 md:pt-20">
                            <div className="flex pt-5 md:pb-2">
                                <span>
                                   <img src={underline} alt="underline" className="pt-4"/>
                                   </span>
                                <h2 className="pl-5 uppercase text-gray-800 text-xl  tracking-widest font-sans">About</h2>
                            </div>
                            <h3 className=" pt-6 text-5xl md:text-4xl lg:text-5xl xl:text-5xl text-gray-800 capitalize tracking-wider font-serif">
                                Making The Delicious Food
                            </h3>
                            <p className="text-gray-500 pt-5 text-md xl:text-md lg:text-base ">
                                Separated they live in Bookmarks grove right at the coast of the
                                Semantics, a large language. Separated they live in Bookmarks grove
                                right at the coast.
                            </p>

                            <div className=" pt-10">
                                <button className="text-white bg-gray-600 py-2 px-8  uppercase ">about us</button>
                            </div>
                    </div>
                </div>
            </div>


            {/*contact-section-first-part*/}

            <div className="container mx-auto py-28">

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
                        <div className=" bg-cover " style={{backgroundImage:`url(${pic})`, backgroundPosition:'top',overflow:'hidden'}}>
                            <div className="bg-white md:mx-10 md:my:20 sm:m-20 lg:m-20 xl:m-20 m-10">

                                <div className=" md:py-10 sm:py-10 lg:pl-24 xl:py-10 xl:pl-28 py-10 pl-8">

                                            <h3 className="text-lightBlack font-bold text-xl oldstyle-nums ">
                                                +1 (234) 567-89-02</h3>
                                            <h4 className="pt-7 text-gray-500 text-md ">
                                                Opening Hours</h4>
                                            <h3 className="text-lightBlack text-base">
                                                9:00am – 10:00pm</h3>
                                        </div>
                            </div>
                        </div>
                    </div>

              </div>
            </div>

            <div className=" pt-5">
                <Features/>
            </div>

          </div>

        </div>
    );
}

export default About;