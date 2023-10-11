'use client'
import React from 'react';
import { useEffect, useState } from 'react';
const Modal = ({ isOpen, onClose, setOpenPrivacy, handleToggleModal }) => {
    const [userChoice, setUserChoice] = useState(null);

    const handleAccept = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'accept');
        // setUserChoice('accept');
        // onClose();
        setOpenPrivacy(false)
    };

    const handleDecline = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'decline');
        // setUserChoice('decline');
        // onClose();
        setOpenPrivacy(false);
    };

    useEffect(() => {
        // Add CSS to disable scrolling when the modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            // Cleanup when the component unmounts
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [isOpen]);



    if (!isOpen || userChoice) {
        return null; // Do not render the modal if user has made a choice or it's not open
    }
    return (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-[100] backdrop-blur-sm px-10">

            <div className='bg-[#2F2F2F] relative rounded-[22px] p-5 flex flex-col justify-center align-middle items-center py-16'>
                <button
                    onClick={() => { handleToggleModal() }}
                    className="absolute top-2 right-2 text-white hover:text-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className='flex flex-col justify-center align-middle items-center'>
                    <img src='/Images/VcLogoMobile.png' className='w-1/3'></img>
                    <button className='hover:transform hover:scale-110 transform transition-transform duration-300  mt-6 bg-gradient-to-r from-[#F8D602] rounded-[400px] px-4 py-2 to-[#F67E03] text-black'>
                        <a href="#" className="text-xl text-black font-bold ">BUY $VITA</a>
                    </button>
                </div>
                <div className='h-1 w-[90%] bg-gradient-to-r from-[#F8D602] to-[#F67E03] mt-6'>
                </div>
                <ul className="flex flex-col lg:space-x-10 space-y-5 align-middle items-center mt-6 text-center">
                    <li  onClick={() => { handleToggleModal() }}>
                        <a href="#ecosystem" className="text-xl text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ECOSYSTEM</a>
                    </li>
                    <li  onClick={() => { handleToggleModal() }}>
                        <a href="#tokenomics" className="text-xl text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">TOKENOMICS</a>
                    </li>
                    <li  onClick={() => { handleToggleModal() }}>
                        <a href="#roadmap" className="text-xl text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ROADMAP</a>
                    </li>
                    <li >
                        <a href="#diceroll" className="text-xl text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">DICEROLL</a>
                    </li>
                    <li>
                        <a href="#roshambo" className="text-xl text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">ROSHAMBO</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1vKw9vt0hnor14KwewkBtdG2MvLDU9Mu1/view?usp=sharing" target='blank' className="text-xl text-[#ECE3CD] hover:transform hover:scale-110 transform transition-transform duration-300">WHITEPAPER</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;
