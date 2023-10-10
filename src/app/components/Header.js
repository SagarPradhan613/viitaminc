import React from 'react';
import './Header.css';

const Header = ({ setOpenPrivacy, handleToggleModal }) => {
    return (
        <nav className="bg-[#2F2F2F] w-full  rounded-t-0 rounded-r-0 rounded-b-[210px] rounded-l-0 py-4 lg:px-28 px-10 md:px-16  absolute top-0 z-50 responsive-nav">
            <div className="container  flex  lg:items-center justify-between items-center align-middle">
                <div className="flex items-center">
                    <img src="/Images/HeaderLogoVc.png" alt="Logo"
                        // className="lg:w-1/3 w-1/3 company-logo" 
                        className='lg:w-[200px] w-[116px] md:w-[150px] header-logo'
                    />
                </div>
                <div className='hidden lg:block  justify-end align-middle'>
                    <ul className='flex justify-center align-middle items-center'>
                        <li className='mx-3 hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#ecosystem" className="text-base font-Staatliches media-fontsize font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ECOSYSTEM</a>
                        </li>
                        <li className='mx-3 hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#tokenomics" className="text-base font-Staatliches media-fontsize font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">TOKENOMICS </a>
                        </li>
                        <li className='mx-3 hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#roadmap" className="text-base font-Staatliches media-fontsize font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ROADMAP </a>
                        </li>
                        <li className='mx-3 hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#diceroll" className="text-base font-Staatliches media-fontsize font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">DICEROLL</a>
                        </li>
                        <li className='mx-3 hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#roshambo" className="text-base font-Staatliches media-fontsize font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ROSHAMBO</a>
                        </li>
                        <li className='mx-4 ml-6 hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <button className='hover:transform hover:scale-110 transform transition-transform duration-300 bg-gradient-to-r from-[#F8D602] rounded-[400px] px-4 py-2 to-[#F67E03] text-black'>
                                <a href="#" className="text-base font-semibold media-fontsize text-black">Connect</a>
                            </button>
                        </li>

                    </ul>
                </div>
                {/* <div className="hidden lg:block">
                    <ul className="flex lg:space-x-10 align-middle items-center">
                        <li className='hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#ecosystem" className="text-lg font-Staatliches  font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ECOSYSTEM</a>
                        </li>
                        <li className='hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#tokenomics" className="text-lg font-Staatliches font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">TOKENOMICS </a>
                        </li>
                        <li className='hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#roadmap" className="text-lg font-Staatliches font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ROADMAP </a>
                        </li>
                        <li className='hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#diceroll" className="text-lg font-Staatliches font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">DICEROLL</a>
                        </li>
                        <li className='hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <a href="#roshambo" className="text-lg font-Staatliches font-semibold text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ROSHAMBO</a>
                        </li>
                        <li className='hover:transform hover:scale-110 transform transition-transform duration-300'>
                            <button className='hover:transform hover:scale-110 transform transition-transform duration-300 bg-gradient-to-r from-[#F8D602] rounded-[400px] px-4 py-2 to-[#F67E03] text-black'>
                                <a href="#" className="text-lg font-semibold text-black">Connect</a>
                            </button>
                        </li>
                    </ul>
                </div> */}

                <div className="lg:hidden">
                    <button className="text-white " onClick={() => { handleToggleModal() }}>
                        <svg
                            className="w-6 h-6 md:w-10 md:h-10 text-yellow-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header