import React from 'react';
import underline from "../images/underln.png";
import menu1 from '../images/m1.png';
import menu2 from '../images/m2.png';
import menu3 from '../images/m3.png';
import menu4 from '../images/m4.png';
import menu5 from '../images/m5.png';
import whine from "../images/wline.png";
import deliveryImg from '../images/delivery.png';
import Chefs from "./Chefs";

function Menu() {
    return (
        <div>
            <div className="container mx-auto px-3 py-10">

                <div className="md:pb-6 lg:pb-6 lg:pt-12 md:pt-12">
                    <div className="flex pt-5 mt-5">
                        <span className="pl-1 pt-5">
                            <img src={underline} alt="underline"/>
                               </span>
                                 <h2 className="text-gray-800 pl-5 md:text-xl lg:text-xl uppercase">Menu</h2>
                                 </div>

                                <div className=" w-full my-10" style={{width: '60%'}}>
                                     <h3 className="text-gray-700 text-5xl md:text-6xl lg:text-7xl
                                            capitalize font-serif">Our Delightful Menu Offers</h3>
                                   </div>

                                     </div>

                           {/*menu-bar*/}
                           <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">

                             <div className="mb-20 ">
                               <div className="relative inline-block text-left">
                            <div>
                                <button type="button"
                                        className="inline-flex justify-center md:w-72 lg:w-96 w-72 mb-4 rounded-md
                                        border border-gray-300 shadow-sm px-3 py-2
                                             bg-gray-800 text-sm font-medium text-white "
                                        id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Meats
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                            </div>

                            {/*<div*/}
                            {/*    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white*/}
                            {/*    ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"*/}
                            {/*    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">*/}
                            {/*    <div className="py-1" role="none">*/}
                            {/*        <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"*/}
                            {/*           tabIndex="-1" id="menu-item-0">Fish</a>*/}
                            {/*        <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"*/}
                            {/*           tabIndex="-1" id="menu-item-1">Bakery</a>*/}
                            {/*        <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"*/}
                            {/*           tabIndex="-1" id="menu-item-1">Drinks</a>*/}
                            {/*    </div>*/}

                            {/*</div>*/}

                        </div>
                    </div>

                    <div className=" grid md:grid-rows-5 lg:grid-rows-5 md:gap-2 lg:gap-4 gap-0 px-3 ">

                        <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-flow-col ">
                            <div>
                                <img src={menu1} alt="menu" className="w-96 sm:w-96 md:w-36 lg:w-48 xl:w-52 pr-2"/>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 pt-5  h-20 ">

                                <div className="flex flex-col flex-grow md:flex-grow md:w-64 w-64 ">
                                    <h4 className="font-bold text-gray-700 text-xl md:text-lg">Italian Mushroom</h4>
                                    <p className="text-gray-500 text-sm lg:text-base pt-2">Mushroom /
                                        Garlic /
                                        Veggies</p>
                                </div>
                                <div className="font-bold text-gray-800 text-3xl md:pl-24 lg:pl-28 pl-24 pt-2 oldstyle-nums">
                                    $9
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-flow-col sm:-mt-20 lg:-mt-0 xl:-mt-0 md:-mt-0 -mt-20">
                            <div>
                                <img src={menu2} alt="menu" className="w-96 sm:w-96 md:w-36 lg:w-48 xl:w-52 pr-2"/>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 pt-5  h-20 ">

                                <div className="grid grid-cols-1 w-56 md:w-44">
                                    <div>
                                        <h4 className="font-bold text-gray-700 text-xl md:text-lg">Fried Potatoe Garlic</h4>
                                        <p className="text-gray-500 text-sm lg:text-base pt-2">Potatoes / Olive Oil /
                                            Garlic</p>

                                    </div>
                                </div>

                                <div className="font-bold text-gray-800 text-3xl md:pl-24 lg:pl-28 pl-24 pt-2 oldstyle-nums">
                                    $5
                                </div>

                            </div>

                        </div>

                        <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-flow-col  sm:-mt-20 lg:-mt-0 xl:-mt-0 md:-mt-0 -mt-20">
                            <div>
                                <img src={menu3} alt="menu" className="w-96 sm:w-96 md:w-36 lg:w-48 xl:w-52 pr-2"/>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 h-20 pt-5">

                                <div className="flex flex-col flex-grow md:flex-grow md:w-44 w-64">
                                    <h4 className="font-bold text-gray-700 text-xl md:text-lg">Tuna Roast Source</h4>
                                    <p className="text-gray-500 text-sm lg:text-base pt-2">Tuna / Potatoes / Rice</p>
                                </div>
                                <div className="font-bold text-gray-800 text-3xl md:pl-24 lg:pl-28 pl-24 pt-2 oldstyle-nums">
                                    $12
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-flow-col sm:-mt-20 lg:-mt-0 xl:-mt-0 md:-mt-0 -mt-20 ">
                            <div>
                                <img src={menu4} alt="menu" className="w-96 sm:w-96 md:w-36 lg:w-48 xl:w-52 pr-2"/>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 pt-5  h-20 ">

                                <div className="flex flex-col flex-grow md:flex-grow md:w-48 w-64 ">
                                    <h4 className="font-bold text-gray-700 text-xl md:text-lg">Roast Pork</h4>
                                    <p className="text-gray-500 text-sm pt-2">Pork / Veggies / Shoyu</p>
                                </div>
                                <div className="font-bold pl-24 text-gray-700 text-3xl md:pl-24  pt-2 oldstyle-nums">
                                    $8
                                </div>
                            </div>
                        </div>


                        <div className=" grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-flow-col sm:-mt-20 lg:-mt-0 xl:-mt-0 md:-mt-0 -mt-20">
                            <div>
                                <img src={menu5} alt="menu" className="w-96 sm:w-96 md:w-36 lg:w-48 xl:w-52 pr-2"/>
                            </div>

                            <div className="grid grid-cols-2 lg:md-cols-2 pt-5  h-20  ">

                                <div className="flex flex-col flex-grow md:flex-grow md:w-48  w-64 h-20 ">
                                    <h4 className="font-bold text-gray-700 text-xl md:text-lg">Fried Chicken</h4>
                                    <p className="text-gray-500 text-sm md:text-base pt-2">Chicken / Olive Oil /
                                        Salt</p>
                                </div>
                                <div className="font-bold pl-24 text-gray-700 text-3xl md:pl-24 lg:pl-28 pt-2 oldstyle-nums">
                                    $8
                                </div>
                            </div>
                        </div>
                        <div className=" md:ml-32 md:mb-16 sm:-mt-28 -mt-36 md:mt-10">
                            <button className="px-8 py-3 focus-within:ring-2 focus-within:outline-none border
                                  focus-within:border-gray-900 bg-gray-200 uppercase">see more
                            </button>
                        </div>

                    </div>

                </div>

                {/*Menu-sec-end*/}
                <br/>


                {/* deliver-contact */}

                <div className="container mx-auto">
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2">
                        <div className=" bg-gray-800">
                            <div className="text-left px-20">
                                <div className="flex pt-20">
                                   <span className=" pt-3">
                                     <img src={whine} alt="underline"/>
                                    </span>
                                    <h2 className="pl-5 uppercase text-white text-md  tracking-widest font-sans">Delivery</h2>
                                </div>
                                <h3 className="pt-7 pb-8 text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl capitalize font-serif">Order
                                    Food</h3>

                                <button className="mb-4 focus-within:ring-2 focus-within:outline-none border
                                  focus-within:border-white rounded-lg text-white px-8 py-3">
                                    CONTACT US
                                </button>
                            </div>
                        </div>

                        <div className="md:grid-flow-col bg-cover"
                             style={{
                                 backgroundImage: `url(${deliveryImg})`,
                                 backgroundRepeat: 'no-repeat',
                                 height: "384px"
                             }}/>
                    </div>
                </div>
            </div>


            {/*Chefs-section*/}
            <div>
                <Chefs/>

            </div>

        </div>
    );
}

export default Menu;