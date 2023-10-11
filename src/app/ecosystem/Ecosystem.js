import React from 'react'

const Ecosystem = () => {
    return (
        <div id='ecosystem' className='border-[3px] border-[#E5C757] contract-main flex flex-col justify-center align-middle items-center py-16'>
            <div className='contract-content flex flex-col justify-center items-center align-middle'>
                <div className='flex flex-col justify-center items-center align-middle'>
                    <p className='text-[#361700] text-3xl lg:text-5xl font-extrabold opacity-90 font-Staatliches  hover:transform hover:scale-110 transition-transform duration-500'>ECOSYSTEM</p>
                    <div className='mt-16 lg:flex w-full relative py-10'>
                        <div className='ecoleft responsive-eco-left lg:w-1/2 px-5 py-5 flex justify-center items-center'>
                            <img src='https://media.vitamincore.financial/Images/newecosystem.png' className='opacity-90  bg-center bg-cover mix-blend-multiply'></img>
                        </div>
                        <div className='ecoright responsive-eco-right flex flex-col lg:w-1/2 px-10 py-5'>
                            <div className=''>
                                <p className='text-[#361700] font-bold opacity-90 text-xl lg:text-4xl'>1. P2E Games</p>
                                <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Vitamin Core offers a blend of classic gaming and modern cryptocurrency rewards with Roll Dice and Roshambo. Roll Dice provides a digital rendition of the dice game, while Roshambo revives the classic Rock-Paper-Scissors challenge. Both games, integrated seamlessly with Core Chain, allow participants to play with their $VITA or $BOW tokens.</p>
                            </div>
                            <div className='mt-8'>
                                <p className='text-[#361700] font-bold opacity-90 text-xl lg:text-4xl'>2.  Staking & Farming</p>
                                <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Flexible staking on Vitamin Core allows users to stake their $VITA tokens, reinforcing the token's price stability and, in return, earning rewards in the form of $BOW tokens. On the other hand, Yield Farming offers a platform for users to provide liquidity and earn rewards, thereby fostering a more robust and liquid marketplace.</p>
                            </div>
                            <div className='mt-8'>
                                <p className='text-[#361700] font-bold opacity-90 text-xl lg:text-4xl'>3.  Rewards</p>
                                <p className='text-[#361700] font-normal mt-6 opacity-90 text-base lg:text-2xl'>Tap into the Vitamin Core rewarding ecosystem built exclusively on the Core Blockchain. By holding $VITA tokens, users can earn $BOW tokens which are sent directly into their wallets without a need of manual claiming. The amount of rewards depends on the amount of $VITA tokens you’re holding.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem