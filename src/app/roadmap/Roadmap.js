import React from 'react'
import './Roadmap.css'

const Roadmap = () => {
    return (
        <div id='roadmap' className='border-[3px] border-[#E5C757] contract-main flex flex-col justify-center align-middle items-center py-16'>
            <div className='contract-content flex flex-col justify-center w-full items-center align-middle px-10 md:px-40 lg:px-0'>
                <div className='flex flex-col justify-center items-center align-middle w-full'>
                    <p className='text-[#361700] text-3xl lg:text-5xl font-extrabold opacity-90 font-Staatliches  hover:transform hover:scale-110 transition-transform duration-500'>ROADMAP</p>
                    <div className='hidden mt-20 relative  lg:flex flex-col justify-center items-center align-middle px-10 py-10 '>
                        <div className='flex flex-col justify-center items-center  align-middle'>

                            <img src='Images/roadmaptoken.png' className='forResponsive w-1/3  hover:transform hover:scale-110 transition-transform duration-500' ></img>

                            <img src="images/roadmappath.png" className='forResponsive w-1/2 ' ></img>
                        </div>
                        <div className='absolute phase1 transform -translate-x-1/2 -translate-y-1/2  hover:transform hover:scale-110 transition-transform duration-500'>
                            <div className='opacity-bg w-full px-8 py-10 mt-8 rounded-[25px] flex flex-col justify-center items-center'>
                                <div className='flex justify-center items-center'>
                                    <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90 opacity-50'></img>
                                    <p className='text-[#361700] ml-5 font-extrabold opacity-90 text-lg lg:text-3xl responsiveHeading'>PHASE 1</p>
                                </div>
                                <ul className='roadmapul flex flex-col justify-center items-start align-middle'>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium opacity-90 text-base lg:text-xl'>Building community</li>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium opacity-90 text-base lg:text-xl'>Carrying out Marketing</li>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium opacity-90 text-base lg:text-xl'>Launching $VITA on Core Chain</li>
                                </ul>
                            </div>
                        </div>

                        <div className='absolute phase2'>
                            <div className='opacity-bg w-full px-8 py-10 mt-8 rounded-[25px] flex flex-col justify-center items-center  hover:transform hover:scale-110 transition-transform duration-500'>
                                <div className='flex justify-center items-center'>
                                    <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90 opacity-50'></img>
                                    <p className='text-[#361700] responsiveHeading ml-5 font-extrabold opacity-90 text-lg lg:text-3xl'>PHASE 2</p>
                                </div>
                                <ul className='roadmapul flex flex-col justify-center items-start align-middle'>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium opacity-90 text-base lg:text-xl'>Initiating auto dividend rewards</li>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium opacity-90 text-base lg:text-xl'>Introducing $VITA staking pool</li>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium opacity-90 text-base lg:text-xl'>Post-launch marketing</li>
                                    {/* Add more list items as needed */}
                                </ul>
                            </div>
                        </div>

                        <div className='absolute phase3  transform -translate-x-1/2 -translate-y-1/2'>
                            <div className='opacity-bg w-full  px-8 py-10   mt-8 rounded-[25px] flex flex-col justify-center items-center  hover:transform hover:scale-110 transition-transform duration-500'>
                                <div className='flex justify-center items-center'>
                                    <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90  opacity-50'></img>
                                    <p className='text-[#361700] ml-5 responsiveHeading font-extrabold opacity-90 text-lg lg:text-3xl'>PHASE 3</p>
                                </div>
                                <ul className='roadmapul flex flex-col justify-center items-start align-middle '>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Introducing GameFi on Vitamin C</li>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Launching Roll Dice</li>
                                    <li className='roadmapli list-inside list-disc text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Launching Rock, Paper & Scissors</li>
                                    {/* <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                    <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                    <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className='absolute phase4 '>
                            <div className='opacity-bg w-full  px-8 py-10   mt-8 rounded-[25px] flex flex-col justify-center items-center  hover:transform hover:scale-110 transition-transform duration-500'>
                                <div className='flex justify-center items-center'>
                                    <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90  opacity-50'></img>
                                    <p className='text-[#361700] ml-5 responsiveHeading font-extrabold opacity-90 text-lg lg:text-3xl'>PHASE 4</p>
                                </div>
                                <ul className='roadmapul flex flex-col justify-center items-start align-middle '>
                                    <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Strategic Partnerships</li>
                                    <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Vitamin Core Games Audit</li>
                                    <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>$VITA CEX Listing</li>
                                    {/* <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                    <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                    <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden   w-full  flex flex-col justify-center items-center relative mt-8  py-5'>
                        <img src='Images/mobileroadmaptoken.png' className=''></img>
                        <div className='w-[3px] h-20  bg-[#361700]'></div>
                        <div className='w-28 h-[3px] bg-[#361700]'></div>
                        <div className='w-full rounded-[25px] opacity-bg px-5 py-8 '>
                            <div className='flex justify-center items-center'>
                                <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90  opacity-50'></img>
                                <p className='text-[#361700] ml-5 font-extrabold opacity-90 text-lg lg:text-3xl responsiveHeading'>PHASE 1</p>
                            </div>
                            <ul className='roadmapul flex flex-col justify-center items-center align-middle '>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Building community</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Carrying out Marketing</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Launching $VITA on Core Chain</li>
                                {/* <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li> */}
                            </ul>

                        </div>
                        <div className='w-[3px] h-10  bg-[#361700]'></div>
                        <div className='w-28 h-[3px] bg-[#361700]'></div>
                        <div className='w-full rounded-[25px] opacity-bg px-5 py-8'>
                            <div className='flex justify-center items-center'>
                                <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90  opacity-50'></img>
                                <p className='text-[#361700] ml-5 font-extrabold opacity-90 text-lg lg:text-3xl responsiveHeading'>PHASE 2</p>
                            </div>
                            <ul className='roadmapul flex flex-col justify-center items-center align-middle '>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Initiating auto dividend rewards</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Introducing $VITA staking pool</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Post launch marketing</li>
                                {/* <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li> */}
                            </ul>

                        </div>
                        <div className='w-[3px] h-10  bg-[#361700]'></div>
                        <div className='w-28 h-[3px] bg-[#361700]'></div>
                        <div className='w-full rounded-[25px] opacity-bg px-5 py-8'>
                            <div className='flex justify-center items-center'>
                                <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90  opacity-50'></img>
                                <p className='text-[#361700] ml-5 font-extrabold opacity-90 text-lg lg:text-3xl responsiveHeading'>PHASE 3</p>
                            </div>
                            <ul className='roadmapul flex flex-col justify-center items-center align-middle '>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Introducing GameFi on Vitamin C</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Launching Roll Dice</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Launching Rock, Paper & Scissors</li>
                                {/* <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li> */}
                                {/* <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li> */}
                            </ul>

                        </div>
                        <div className='w-[3px] h-10  bg-[#361700]'></div>
                        <div className='w-28 h-[3px] bg-[#361700]'></div>
                        <div className='w-full rounded-[25px] opacity-bg px-5 py-8'>
                            <div className='flex justify-center items-center'>
                                <img src='Images/phasepoints.png' className='mix-blend-luminosity filter brightness-90  opacity-50'></img>
                                <p className='text-[#361700] ml-5 font-extrabold opacity-90 text-lg lg:text-3xl responsiveHeading'>PHASE 4</p>
                            </div>
                            <ul className='roadmapul flex flex-col justify-center items-center align-middle '>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Strategic Partnerships</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Vitamin Core Games Audit</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>$VITA CEX Listing</li>
                                {/* <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li>
                                <li className='roadmapli text-[#361700] whitespace-nowrap flex flex-col justify-center spcl-li items-center align-middle font-medium  opacity-90 text-base lg:text-xl'>Lorem Ipsum is a Dummy Text</li> */}
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap