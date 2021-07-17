import React from 'react';
import underline from '../images/underln.png';
import fish from '../images/fish.png';
import feat1 from "../images/feat1.png";
import Menu from "./Menu";

function Features() {
    return (
        <div className="container mx-auto px-3 sm-px-0">

            <div>
                <div className="flex pt-5 mt-5">
                  <span className="pl-1 pt-5">
                    <img src={underline} alt="underline"/>
                      </span>
                    <h2 className="text-gray-800 pl-5 md:text-xl lg:text-xl uppercase">Features</h2>
                </div>

                <div className=" w-full my-10" style={{width: '50%'}}>
                    <h3 className="text-gray-700 text-5xl md:text-6xl lg:text-6xl capitalize font-serif">First-Class
                        Dining Experience</h3>
                </div>
            </div>
            <br/>


            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3
                      xl:grid-cols-3 gap-6 sm:px-28 lg:px-0 md:px-0 xl:px-0 px-1">

                {/*-Card 1*/}
                <div className="rounded overflow-hidden  sm:w-96 md:w-56 lg:w-72 xl:w-80 w-80 ">
                    <div style={{backgroundImage: `url(${feat1})`,backgroundRepeat:'no-repeat', height: '288px'}}
                         className="mb-3 w-full relative md:bg-no-repeat sm:bg-no-repeat ">
                        <img className=" rounded-full bg-gray-800 p-6 absolute -bottom-5 right-10 h-24 w-24 " src={fish}
                             alt="Mountain"/>
                    </div>
                    <div className="px-1 py-10">
                        <div className="font-bold text-2xl mb-4 text-gray-700">Fresh Ingredients</div>
                        <p className="text-gray-600 pr-5 ">
                            The copy warned the Little Blind Text,that where it came from it
                            would have been rewritten a thousand times.
                        </p>
                    </div>
                </div>

                {/*-Card 2*/}
                <div className="rounded overflow-hidden sm:w-96 md:w-56 lg:w-72 xl:w-80 w-80 ">
                    <div style={{backgroundImage: `url(${feat1})`,backgroundRepeat:'no-repeat', height: '288px'}}
                         className="mb-3 w-full  relative">
                        <img className=" rounded-full bg-gray-800 p-6 absolute -bottom-5 right-10 h-24 w-24 " src={fish}
                             alt="Mountain"/>
                    </div>
                    <div className="px-1 py-10">
                        <div className="font-bold text-2xl mb-4 text-gray-700">Fresh Ingredients</div>
                        <p className="text-gray-600 pr-5">
                            The copy warned the Little Blind Text,that where it came from it
                            would have been rewritten a thousand times.
                        </p>
                    </div>
                </div>
                {/*-Card 3*/}

                <div className="rounded overflow-hidden sm:w-96 md:w-56 lg:w-72 xl:w-80 w-80">
                    <div style={{backgroundImage: `url(${feat1})`,backgroundRepeat:'no-repeat', height: '288px'}}
                         className="mb-3 w-full relative ">
                        <img className=" rounded-full bg-gray-800 p-6 absolute -bottom-5 right-10 h-24 w-24 " src={fish}
                             alt="Mountain"/>
                    </div>
                    <div className="px-1 py-10">
                        <div className="font-bold text-2xl mb-4 text-gray-700">Fresh Ingredients</div>
                        <p className="text-gray-600 pr-5 ">
                            The copy warned the Little Blind Text,that where it came from it
                            would have been rewritten a thousand times.
                        </p>
                    </div>
                </div>

                {/*card-sec-end*/}

            </div>
            {/*feature-sec-end*/}

            <div className="container mx-auto">
                <Menu/>
            </div>

        </div>
    );
}


export default Features;