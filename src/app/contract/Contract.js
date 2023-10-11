import React from 'react'
import './Contract.css';

const Contract = () => {
    const textToCopy = '0x00000000000000000000';

    const copyToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Optionally, provide feedback to the user that the text has been copied
        // alert(`Copied: ${textToCopy}`);
    };
    return (
        <>
            <div className='border-[3px] border-[#E5C757] contract-main flex flex-col justify-center align-middle items-center py-16'>
                <div className='contract-content flex flex-col justify-center items-center align-middle'>
                    <div>
                        <p className='text-[#361700] text-3xl lg:text-5xl font-extrabold opacity-90 font-Staatliches  hover:transform hover:scale-110 transition-transform duration-500'>CONTRACT</p>
                    </div>
                    <div className='md:flex  justify-center items-center mt-20'>
                        <div className='flex justify-center items-center'>
                            <img src='https://media.vitamincore.financial/Images/Token2.png' className='md:w-1/3 w-1/5 mr-4 md:mr-8 hover:transform hover:scale-110 transition-transform duration-500'></img>
                            <p className='text-[#361700] text-base lg:text-4xl  opacity-90 font-Staatliches '>0x00000000000000000000</p>
                        </div>
                        <div   onClick={copyToClipboard} className='hover:transform hover:scale-110 transition-transform duration-500 flex justify-center items-center md:ml-10 '>
                            <img src='https://media.vitamincore.financial/Images/copy.png'></img>
                            <p className='text-[#361700E5] lg:text-xl text-sm cursor-pointer'>COPY</p>
                        </div>
                    </div>
                    <div className='flex mt-20'>
                        <button className='btn-contract lg:ml-2 text-xl font-Staatliches font-bold hover:transform hover:scale-110 transform transition-transform duration-300 bg-gradient-to-r from-[#F8D602] rounded-[400px] px-6 py-2 to-[#F67E03] text-black'>
                            BUY $VITA
                        </button>
                        <button className='btn-contract lg:ml-10 ml-6 text-xl font-Staatliches font-bold hover:transform hover:scale-110 transform transition-transform duration-300 bg-gradient-to-r from-[#F8D602] rounded-[400px] px-8 py-2 to-[#F67E03] text-black'>
                            CHART
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contract