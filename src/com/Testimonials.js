import React from "react";
import underline from "../images/underln.png";
import arrow from "../images/arrow.png";
import group from "../images/Group.png";
import customer from "../images/customer.png";
import Blog from "./Blog";

function Testimonials(){
    return(
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">

                <div className="md:mt-20">

                    <div className="bg-gray-700 md:p-8  py-10" >
                        <div className="ml-5">
                            <div className=" mt-5 pl-2">
                                <img src={customer} alt="underline"/>
                            </div>
                            <h3 className=" py-5 text-white text-3xl md:pl-2">Sammy Lawson</h3>
                            <p className="text-white pb-4 pr-2 md:pb-4">
                                "There live the blind texts. Separated they live in right at the
                                coast of the Semantics, a large language ocean. Flows by their place
                                and supplies it with the necessary regelialia."
                            </p>
                            <span>
                              <img src={group} alt="groups" className="mt-4 mb-5" />
                              </span>

                        </div>
                    </div>

                </div>

                <div className="md:mt-40 my-16">
                    <div className=" md:w-full mx-8 ">
                        <div className="flex pt-5 md:pb-2">
                                <span>
                                   <img src={underline} alt="underline" className="pt-4"/>
                                   </span>
                            <h2 className="pl-5 uppercase text-gray-800 text-xl  tracking-widest font-sans">Testimonials</h2>
                        </div>

                        <h3 className=" pt-6 pr-5 text-5xl md:text-5xl lg:text-5xl text-gray-800 capitalize tracking-wider font-serif">
                            Customer Reviews
                        </h3>
                        <p className="text-gray-500 pt-5 pr-10 ">
                            "There live the blind texts. Separated they live in right at the coast of the Semantics,
                            a large language ocean. Flows by their place
                            and supplies it with the necessary regelialia."
                        </p>

                        <div className=" pt-10">
                            <img src={arrow} alt="arrow" className="mt-1 pb-6 md:w-24" />
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <Blog/>
            </div>
        </div>
    );
}
export default Testimonials;