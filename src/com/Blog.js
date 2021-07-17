import React from "react";
import underline from "../images/underln.png";
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png';
import blog4 from '../images/blog4.png';

function Blog(){
    return(
        <div className="container mx-auto pb-5 px-3 sm:px-1">
            <div className="md:pb-8 lg:pb-6 lg:pt-32 md:pt-32">
                <div className="flex pt-5 mt-5">
                  <span className="pl-1 pt-5">
                    <img src={underline} alt="underline"/>
                      </span>
                    <h2 className="text-gray-800 pl-5 md:text-xl lg:text-xl uppercase">Blogs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-10 ">
                    <div className="">
                        <h3 className="text-gray-700 text-5xl md:text-6xl lg:text-6xl
                        capitalize font-serif">Our Articles</h3>
                    </div>
                    <div className=" md:ml-44">
                        <button className="px-8 py-3 focus-within:ring-2 focus-within:outline-none border
                                  focus-within:border-gray-900 bg-gray-200 uppercase">see more</button>
                    </div>
                </div>
            </div>


            {/*card-sec*/}

            <div className="pr-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4
            xl:grid-cols-4 md:gap-2 lg:gap-2 ">

                {/*// <!--Card 1-->*/}

                <div className="rounded">
                    <div className="w-full">
                        <img src={blog1} alt="bolg1"/>
                    </div>
                    <div className="px-1 py-4">
                        <div className="md:text-2xl font-serif tracking-widest text-gray-800
                        md:text-xl  lg:text-xl text-2xl my-3">Receipts</div>
                        <p className="text-black text-2xl md:text-lg font-bold font-sans py-2">
                            Slapped cozy a that lightheartedly
                        </p>
                        <p className="text-gray-600 py-5 text-md">
                            24 jun 2020</p>

                    </div>
                </div>

                {/*// <!--Card 2-->*/}
                <div className="rounded ">
                    <div className="w-full">
                        <img src={blog2} alt="bolg1"/>
                    </div>
                    <div className="px-1 py-4">
                        <div className="md:text-2xl font-serif tracking-widest
                              text-gray-800 md:text-xl  lg:text-xl text-2xl my-3">Food</div>
                        <p className="text-black font-sans text-2xl  md:text-lg font-bold  py-2">
                            On deer horse aboard tritely yikes
                        </p>
                        <p className="text-gray-600 py-5 text-md">
                            15 jun 2020</p>
                    </div>
                </div>

                {/*// <!--Card 3-->*/}

                <div className="rounded ">
                    <div className="w-full">
                        <img src={blog3} alt="bolg1"/>
                    </div>
                    <div className="px-1 py-4">
                        <div className="md:text-2xl font-serif tracking-widest  md:text-xl
                                  lg:text-xl text-gray-800 text-2xl my-3">Restaurant</div>
                        <p className=" py-2 text-black font-sans text-2xl md:text-lg font-bold">
                            Last view back on the skyline of her
                        </p>
                        <p className="text-gray-600 py-5 text-md">
                            12 jun 2020</p>

                    </div>
                </div>

                {/*// <!--Card 4-->*/}

                <div className="rounded ">
                    <div className="w-full">
                        <img src={blog4} alt="bolg1"/>
                    </div>
                    <div className="px-1 py-4">
                        <div className="md:text-2xl font-serif tracking-widest md:text-xl
                                        lg:text-xl text-gray-800 text-2xl my-3">Delivery</div>
                        <p className=" py-2 text-black text-2xl md:text-lg font-bold font-sans">
                            Pityful a rethoric question ran over
                        </p>
                        <p className="text-gray-600 py-5 text-md">
                            30 may 2020</p>

                    </div>
                </div>
            </div>
            {/*end-blog*/}

        </div>
    );
}
export default Blog;