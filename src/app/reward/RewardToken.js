import React from 'react'
import './RewardToken.css';

const RewardToken = () => {
    return (

        <div className='border-[3px] border-[#E5C757] contract-main flex flex-col justify-center align-middle items-center py reward-container-overflow'>
            <div className='contract-content flex flex-col justify-center items-center align-middle'>
                <div className='flex flex-col justify-center items-center align-middle'>
                    <p className='text-[#361700] text-3xl lg:text-5xl font-extrabold opacity-90  lg:mt-16 mt-10'>REWARD TOKEN</p>
                </div>
                <div className='absolute left-0 top-10 opacity-70 lg:block hidden'>
                    <img src='Images/lefttrophy.png' className='lg:block hidden'></img>
                </div>
                <div className='absolute left-0 top-0 opacity-50 lg:hidden block'>
                    <img src='Images/lefttrophy.png' className='lg:hidden block w-1/4'></img>
                </div>
                <div className='absolute left-0 top-0 opacity-50 '>
                    <img src='Images/topleftreward.png' className='w-1/4 lg:w-full responsive-size-reward-img'></img>
                </div>
                <div className='lg:flex '>
                    <div className='lg:w-[60%] py-5 lg:px-20 px-10 mt-10 lg:mt-0 lg:mb-20 mb-16 responsive-left-reward-portion'>
                        <div className='lg:mt-64'>
                            <p className='text-[#361700] font-bold opacity-90 text-xl lg:text-4xl'>Auto Dividend Hourly Rewards</p>
                            <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Auto dividend reward mechanism stands out as a unique and enticing feature within the Vitamin Core ecosystem. Holders of $VITA tokens are automatically entitled to dividends, which are accurately and periodically dispensed each hour without any manual intervention.

                                The underlying smart contract diligently tracks every holder's balance, guaranteeing precise dividend distributions. Dividends are remitted in the form of $BOW tokens, seamlessly sent to the holder's wallet.

                                To partake in this rewarding experience, a holder must maintain a minimum balance of 500,000 $VITA tokens. Moveover, the system operates on a scalable model; the more $VITA tokens one possesses, the heftier the dividends they reap.
                            </p>
                            {/* <button className='btn-contract lg:ml-2 text-xl font-Staatliches font-bold hover:transform hover:scale-110 transform transition-transform duration-300 bg-gradient-to-r from-[#F8D602] rounded-[400px] px-6 py-2 to-[#F67E03] text-black mt-10 opacity-50'>
                                BUY $VITA
                            </button> */}
                        </div>
                    </div>
                    <div className='lg:w-[40%] relative'>
                        <div className='absolute right-0 bottom-20 opacity-80 w-[80%] responsive-reward-container'>
                            <img src='Images/righttrophy.png' className='lg:block hidden responsive-right-reward'></img>
                        </div>
                        <img src='Images/rewardbg.png' className='lg:w-full w-1/4 absolute right-0 bottom-0 opacity-70 responsive-reward-yellow-bg' alt='Reward Background' />

                    </div>
                </div>
            </div>

        </div>

    )
}

export default RewardToken