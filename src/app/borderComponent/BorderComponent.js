import React from 'react';
import './BorderComponent.css';

const BorderComponent = () => {
    return (
        <div className='relative'>
            <div class="lg:h-[30vh] h-[10vh] lg:block hidden bg-gradient-to-b from-[#fee173] to-white"></div>
            <div class="lg:h-[30vh] h-[10vh] lg:hidden block bg-gradient-to-b from-[#e6af1e] to-white"></div>
            <div className='flex flex-col justify-center items-center align-middle vitamintext-container'>
                <img src='Images/vitamintext.png' className='vitamintextimg w-2/3' ></img>
                <div className='absolute bg-[#2F2F2F]  opacity-50 flex justify-center items-center align-middle left-0'>
                    <img src='Images/borderlogo.png' alt='Border Logo' className='opacity-1 bg-[lightgray] bg-center bg-cover mix-blend-luminosity' />
                </div>
                <div className='absolute bg-[#2F2F2F]  opacity-50 flex justify-center items-center align-middle right-0'>
                    <img src='Images/borderlogo.png' alt='Border Logo' className='opacity-1 bg-[lightgray] bg-center bg-cover mix-blend-luminosity' />
                </div>
            </div>
            <div class="lg:h-[30vh] h-[10vh] lg:hidden block bg-gradient-to-t from-[#e6af1e] to-white"></div>
            <div class="lg:h-[30vh] h-[10vh] lg:block hidden bg-gradient-to-t from-[#fee173] to-white"></div>
        </div>
    )
}

export default BorderComponent