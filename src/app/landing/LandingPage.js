import React from 'react'
import './Landing.css'
const LandingPage = () => {
    return (
        <>
            <div className='responsive-line box2 flex flex-col justify-center items-center pt-5'>
                <div className='box2-content w-full'>
                    <div className='relative flex flex-col justify-center items-center w-full lg:h-[100vh] h-[50vh] -mb-1'>
                        <img src='https://media.vitamincore.financial/Images/herologo.png' className='w-1/4 hover:transform hover:scale-105 transition-transform duration-500'></img>
                        <div className='absolute left-10 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex -rotate-90 main-buttons px-10 py-5 '>
                            <div className='bg-[#2F2F2F] p-3 rounded-[50%] hover:transform hover:scale-110 transition-transform duration-500'>
                                <img src='https://media.vitamincore.financial/Images/buttonA.png' className='lg:h-[20px] lg:w-[20px] h-[15px] w-[15px] rotate-90' ></img>
                            </div>
                            <div className='bg-[#2F2F2F] p-3 rounded-[50%] ml-5 mr-5 hover:transform hover:scale-110 transition-transform duration-500'>
                                <img src='https://media.vitamincore.financial/Images/buttonB.png' className='lg:h-[20px] lg:w-[20px] h-[15px] w-[15px] rotate-90' ></img>
                            </div>
                            <div className='bg-[#2F2F2F] p-3 rounded-[50%] hover:transform hover:scale-110 transition-transform duration-500'>
                                <img src='https://media.vitamincore.financial/Images/buttonC.png' className='lg:h-[20px] lg:w-[20px] h-[15px] w-[15px] rotate-90' ></img>
                            </div>
                        </div>
                        <div className='absolute lg:bottom-0 -bottom-1 w-full'>
                            <div class="w-full h-[100px] transform rotate-180">
                                <div class="bg-gradient-to-b from-white via-white to-transparent h-full">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage