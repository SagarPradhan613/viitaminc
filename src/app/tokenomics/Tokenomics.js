import React, { useEffect, useState } from 'react'
import './Tokenomics.css';


const Tokenomics = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const [slide1, setSlide1] = useState(true);
    const [slide2, setSlide2] = useState(false);
    const [slide3, setSlide3] = useState(false);

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setSliderValue(newValue);

        if (newValue >= 0 && newValue <= 49) {
            setSlide1(true);
            setSlide2(false);
            setSlide3(false);
        }

        if (newValue >= 50 && newValue <= 99) {
            console.log('Slider is at the center');
            setSlide1(false);
            setSlide2(true);
            setSlide3(false);
        }

        if (newValue === 100) {
            console.log('Slider is at the end');
            setSlide1(false);
            setSlide2(false);
            setSlide3(true);
        }
    };
    const sliderStyles = {
        // Style for the slider button
        thumb: {
            borderRadius: '400px',
            background: 'linear-gradient(90deg, #F8D602 -6.42%, #F67E03 109.78%)',
            width: '46px',
        },
        // Style for the slider path
        track: {
            background: 'rgba(54, 23, 0, 0.5)', // Background color with opacity 50%
        },
    };



    const nextClickhandle = () => {
        if (slide1) {
            setSlide1(false);
            setSlide2(true);
            setSlide3(false);
        } else if (slide2) {
            setSlide1(false);
            setSlide2(false);
            setSlide3(true);
        } else if (slide3) {
            setSlide1(false);
            setSlide2(false);
            setSlide3(true);
        }
    }
    const backClickhandle = () => {
        if (slide1) {
            setSlide1(true);
            setSlide2(false);
            setSlide3(false);
        } else if (slide2) {
            setSlide1(true);
            setSlide2(false);
            setSlide3(false);
        } else if (slide3) {
            setSlide1(false);
            setSlide2(true);
            setSlide3(false);
        }
    }


    return (
        <>
            <div id='tokenomics' className='border-[3px] border-[#E5C757] contract-main flex flex-col justify-center align-middle items-center py-16'>
                <div className='contract-content flex flex-col w-full px-10 justify-center items-center align-middle'>
                    <div className='flex flex-col w-full justify-center items-center align-middle text-center'>
                        <p className='text-[#361700] text-3xl lg:text-5xl font-extrabold opacity-90 font-Staatliches  hover:transform hover:scale-110 transition-transform duration-500 lg:mb-10'>$VITA TOKENOMICS</p>
                        <div className=' mt-10 lg:flex hidden opacity-bg  text-opacity-100 rounded-[50px] px-5 py-8 justify-around w-full'>
                            <div className='flex flex-col justify-center items-center opacity-100'>
                                <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>10,000,000,000</p>
                                <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>Max Supply</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>$10,875</p>
                                <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>Initial Market Cap</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>$25,000</p>
                                <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>FDV</p>
                            </div>
                        </div>
                        <div className=' mt-5 lg:flex flex-col hidden opacity-bg items-center text-opacity-100 rounded-[50px] px-5 py-16 justify-around w-full text-center'>

                            <div className='flex justify-around w-full '>
                                <div className='text-left'>
                                    <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>ALLOCATION</p>
                                    <div className='bg-[#000] h-[1px] w-1/2 mt-4'></div>
                                    <p className='text-[#361700] font-medium mt-16 opacity-90 text-base lg:text-2xl'>Public Sale</p>
                                    {/* <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>NFTs</p> */}
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>Games</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>Marketing</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>Ecosystem</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>Team</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>Liquidity</p>
                                </div>
                                <div className='text-left'>
                                    <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>AMOUNT</p>
                                    <div className='bg-[#000] h-[1px] w-1/3 mt-4'></div>
                                    <p className='text-[#361700] font-medium mt-16 opacity-90 text-base lg:text-2xl'>40% (400,000,000)</p>
                                    {/* <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>5% (50,000,000)</p> */}
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% (100,000,000)</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>5% (50,000,000)</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% (100,000,000)</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% (100,000,000)</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>25% (250,000,000)</p>
                                </div>
                                <div className='text-left'>
                                    <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>VESTING</p>
                                    <div className='bg-[#000] h-[1px] w-1/4 mt-4'></div>
                                    <p className='text-[#361700] font-medium mt-16 opacity-90 text-base lg:text-2xl'>100% at TGE</p>
                                    {/* <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p> */}
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                    <p className='text-[#361700] font-medium mt-6 opacity-90 text-base lg:text-2xl'>100% at TGE to add liquidity</p>
                                </div>
                            </div>
                        </div>

                        <div className='lg:hidden block mt-5'>
                            <div className='opacity-bg rounded-[22px] px-10 py-5 flex flex-col justify-center items-center'>
                                <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>10,000,000,000</p>
                                <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Max Supply</p>
                            </div>
                            <div className='opacity-bg rounded-[22px] px-10 py-5 flex flex-col justify-center mt-4 items-center'>
                                <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>$10,875</p>
                                <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Initial Market Cap</p>
                            </div>
                            <div className='opacity-bg rounded-[22px] px-10 py-5 flex flex-col justify-center mt-4 items-center'>
                                <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>$25,000</p>
                                <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>FDV</p>
                            </div>

                        </div>
                        <div className='opacity-bg w-full  px-10 py-10 lg:hidden border mt-8 rounded-[25px]'>
                            <div className='flex'>
                                {slide3 ? (
                                    <>
                                        <div>
                                            <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>VESTING</p>
                                            <div className='w-1/2 h-[1px] bg-black'></div>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>100% at TGE</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                            {/* <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p> */}
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% TGE , 10% Linear</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>100% at TGE to add liquidity</p>
                                        </div>
                                    </>
                                ) : slide2 ? (
                                    <>
                                        <div>
                                            <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>AMOUNT</p>
                                            <div className='w-1/2 h-[1px] bg-black'></div>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>40% (400,000,000)</p>
                                            {/* <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>5% (50,000,000)</p> */}
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% (100,000,000)</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>5% (50,000,000)</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% (100,000,000)</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>10% (100,000,000)</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>25% (250,000,000)</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <p className='text-[#361700] font-extrabold opacity-90 text-lg lg:text-3xl  hover:transform hover:scale-110 transition-transform duration-500'>ALLOCATION</p>
                                            <div className='w-1/2 h-[1px] bg-black'></div>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Public Sale</p>
                                            {/* <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>NFTs</p> */}
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Games</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Marketing</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Ecosystem</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Team</p>
                                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Liquidity</p>
                                        </div>
                                    </>
                                )}


                                <div className='flex flex-col justify-center items-end w-full'>
                                    <div onClick={() => { nextClickhandle() }} className=' hover:transform hover:scale-105 transition-transform duration-500'>
                                        
                                        <img src='Images/arrowlefttoken.png'></img>
                                        <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl mb-4'>Next</p>
                                    </div>
                                    <div onClick={() => { backClickhandle() }} className=' hover:transform hover:scale-105 transition-transform duration-500'>
                                        <img src='Images/arrowlefttoken.png' className='transform scale-x-[-1] rotate-0'></img>
                                        <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Back</p>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                style={sliderStyles}
                                className="custom-slider mt-8"
                            />
                        </div>
                        <div className='flex lg:hidden mt-10 flex-col px-5 py-16 justify-center items-center'>
                            <img src='Images/piechart.png' className=' hover:transform hover:scale-105 transition-transform duration-500'></img>
                        </div>
                        <div className='lg:flex  hidden mt-10 flex-col px-5 py-16 justify-center items-center'>
                            <img src='Images/piechartvalue.png' className='w-2/3 hover:transform hover:scale-105 transition-transform duration-500'></img>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Tokenomics