import React from "react";
import underline from "../images/underln.png";
import table1 from '../images/table1.png'
import table2 from '../images/table2.png'
import table3 from '../images/table3.png';
import pins from '../images/pins.png'
import Testimonials from "./Testimonials";

function TableBooking(){
    return(
        <div className="container mx-auto">

            <div className="md:pb-5 lg:pb-5 lg:pt-16 md:pt-16 pt-16 sm:px-8">
                <div className="flex pt-5 mt-5">
                  <span className="pl-1 pt-5">
                    <img src={underline} alt="underline"/>
                      </span>
                    <h2 className="text-gray-800 pl-5 md:text-xl lg:text-xl uppercase">Book a table</h2>
                </div>

                <div className=" w-full my-10" style={{width: '40%'}}>
                    <h3 className="text-gray-700 text-5xl md:text-6xl lg:text-6xl
                        capitalize font-serif">Upcoming Events</h3>
                </div>
            </div>
            {/*card-sec*/}

            <div className="">

            <div className="sm:px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:space-x-2 ">

                {/*// <!--Card 1-->*/}

                <div className="rounded lg:mb-5 xl:mb-5 md:mb-5 mb-44">
                    <div className=" md:h-72 h-full relative"  style={{ backgroundImage:`url(${table1})`, backgroundRepeat:'no-repeat'}} >
                        <h1 className="font-bold md:text-3xl absolute top-14 left-16 text-2xl text-white
                        font-serif text-center sm:left-20   md:pt-16 lg:pt-16 oldstyle-nums"> 15 June</h1>
                    </div>
                    <div className="px-1 py-4">
                        <div className="font-bold md:text-2xl text-gray-800 text-xl my-3">National Day</div>
                        <p className="text-gray-700 sm:pr-32">
                            The copy warned the Little Blind Text, that where it came from it would have been.
                        </p>
                    </div>
                </div>
                {/*card-2*/}
                <div className=" rounded  lg:mb-5 xl:mb-5 md:mb-5 mb-44">
                    <div className="md:h-72 h-full relative"  style={{ backgroundImage:`url(${table2})`, backgroundRepeat:'no-repeat'}} >
                        <h1 className="font-bold md:text-3xl absolute top-14 left-16 text-2xl sm:left-20
                        text-white font-serif text-center  md:pt-16 lg:pt-16 oldstyle-nums"> 20 June</h1>
                    </div>
                    <div className="px-1 py-4 ">
                        <div className="font-bold md:text-2xl text-gray-800 text-xl my-3">Superbowl</div>
                        <p className="text-gray-700  sm:mr-32">
                            Little Blind Text, that where it came from it would have been rewritten.
                        </p>
                    </div>
                </div>

                {/*card-3*/}
                <div className="rounded  lg:mb-5 xl:mb-5 md:mb-5 mb-44">
                    <div className="relative md:h-72 h-full "  style={{ backgroundImage:`url(${table3})`, backgroundRepeat:'no-repeat'}} >
                        <h1 className="font-bold md:text-3xl text-white text-2xl absolute top-14 sm:left-20 left-16
                        font-serif text-center md:pt-16 lg:pt-16 oldstyle-nums"> 1 August</h1>
                    </div>
                    <div className="px-1 py-4">
                        <div className="font-bold md:text-2xl text-gray-800 text-xl my-3">Groundhog Day</div>
                        <p className="text-gray-700 sm:mr-32">
                            Text, that where it came from it would have been rewritten a thousand times.
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:px-96 lg:px-96 md:px-72 px-40 py-8 sm:pb-20">
                <img src={pins} alt="pins"  />
            </div>

            </div>
            {/*end-table-book*/}


            <div>
                <Testimonials/>
            </div>



        </div>
    );
}
export default TableBooking;