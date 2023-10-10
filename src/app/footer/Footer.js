import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center px-10  py-16 relative'>
            <img src='Images/footerimg.png' className='w-[50%] filter grayscale responsive-footer-img'></img>
            <p className='absolute text-xs lg:text-sm text-[#361700E5] opacity-70 rotate-90 hidden lg:block -left-10 responsive-copyright'>copyright 2023 , All rights received.</p>
            <p className='absolute text-xs lg:text-sm text-[#361700E5] opacity-70 rotate-90 lg:hidden block -left-5'>copyright 2023 , </p>
            <p className='absolute text-xs lg:text-sm text-[#361700E5] opacity-70 rotate-90 lg:hidden block -left-10'> All rights received.</p>
            <p className='absolute hidden lg:block text-xs lg:text-sm rotate-90 text-[#361700E5] opacity-70 right-0 responsive-copyright'>Vitamincore.com</p>
            <p className='absolute lg:hidden block text-xs lg:text-sm rotate-90 text-[#361700E5] opacity-70 -right-5'>Vitamincore.com</p>
            
        </div>
    )
}

export default Footer