import React from 'react'
import './Social.css'
const Social = () => {
    return (
        <div className='border-[3px] border-[#E5C757] contract-main flex flex-col justify-center align-middle items-center py-16'>
            <div className='contract-content flex flex-col justify-center items-center align-middle text-center'>
                <div className='flex flex-col justify-center items-center align-middle'>
                    <p className='text-[#361700] text-3xl lg:text-5xl font-extrabold opacity-90 font-Staatliches  hover:transform hover:scale-110 transition-transform duration-500'>COMMUNITY</p>
                    <p className='text-[#361700] lg:text-3xl text-sm font-bold mt-24 responsive-community'>JOIN OUR SOCIALS FOR LATEST UPDATES AND ANNOUNCEMENTS</p>
                    <div className='flex justify-center align-middle items-center mt-24'>
                        <a href="https://t.me/vitamincore" target="_blank" className='transform transition-transform duration-300 hover:scale-110 bg-[#2F2F2F] rounded-[50%] h-[60px] w-[60px] p-4 flex justify-center align-middle items-center'>
                            <img src='https://media.vitamincore.financial/Images/smalltele.png' className=''></img>
                        </a>
                        <a href="https://t.me/VitaminCoreOfficial" target="_blank" className='transform transition-transform duration-300 hover:scale-110 bg-[#2F2F2F] ml-5 rounded-[50%] h-[60px] w-[60px] p-4 flex justify-center align-middle items-center'>
                            <img src='https://media.vitamincore.financial/Images/smalltele.png' className=''></img>
                        </a>
                        <a href="https://twitter.com/Vitamincore" target="_blank" className='transform transition-transform duration-300 hover:scale-110 bg-[#2F2F2F] ml-5 rounded-[50%] h-[60px] w-[60px] p-4 flex justify-center align-middle items-center'>
                            <img src='https://media.vitamincore.financial/Images/smalltwitter.png' className=''></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social

