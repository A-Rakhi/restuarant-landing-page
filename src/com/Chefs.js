import React from "react";
import chef3 from "../images/chef3.png";
import chef2 from "../images/chef2.png";
import pic3 from "../images/pic3.png";
import underline from "../images/underln.png";
//import underline from "../images/underln.png";
import sign from '../images/sign.png'
import TableBooking from "./TableBooking";

function Chefs(){
    return(
        <div className="container mx-auto px-3 sm:px-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <div className="md:ml-1 lg:ml-1 md:mt-10 lg:mt-10 mr-3">
                    <img src={pic3} className=" md:w-36 w-36 sm:w-40 lg:w-44 xl:w-44 relative sm:left-32 md:left-40  left-20 top-24" alt="pic"/>
                    <img src={chef2} className="md:w-44 w-36 sm:w-48 lg:w-48 xl:w-48  relative z-10 left-5 sm:left-10 md:left-10 "  alt="pic"/>
                    <img src={chef3} className="md:w-72 sm:w-80 w-64 lg:w-96 xl:w-96 relative sm:left-28 md:left-32 left-16 -top-32 "  alt="pic"/>
                </div>

                <div className="md:mt-44 lg:mt-44 sm:px-8 ">
                    <div className=" md:ml-20 lg:ml-16 xl:ml-16 ml-10">
                        <div className="flex pt-5 md:pb-2">
                                <span>
                                   <img src={underline} alt="underline" className="pt-4"/>
                                   </span>
                            <h2 className="pl-5 uppercase text-gray-800 text-xl  tracking-widest font-sans">Our Chef</h2>
                        </div>
                        <h3 className=" pt-6 text-5xl md:text-4xl sm:text-6xl lg:text-5xl text-gray-800 capitalize tracking-wider font-serif">
                            Svyatoslav Taushev
                        </h3>
                        <p className="text-gray-500 pt-5 sm:pr-10 pr-1">
                            "There live the blind texts. Separated they live in right at the coast of the
                            Semantics, a large language ocean. Flows by their place and
                            supplies it with the necessary regelialia."
                        </p>

                        <div className=" pt-10">
                            <img src={sign} alt="sign" className="mt-4 pb-3 w-52" />
                        </div>
                    </div>
                </div>

            </div>

            {/*Table-booking component*/}

            <div>
                <TableBooking/>

            </div>


        </div>
    );
}
export default Chefs;