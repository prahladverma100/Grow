

import React from 'react'
import { Arrow } from './Icon'
// import { AccrdnBtn } from './icons'


const Frequently = () => {
    return (
        <div className='bg-[#EFEFEF]' id='event'>
            <div className='mx-auto container px-4 justify-center  items-center xl:pt-[100px] pb-[50px] md:pb-[80px] lg:pb-[140px]'>
                <h3 data-aos="zoom-in-up" className='text-[24px] sm:text-[32px]  md:text-[52px] text-black text-center ff_outfit font-semibold sm:pt-[40px] lg:pt-[100px] mb-[20px] md:md-[30px]  lg:mb-[40px]'>Frequently Asked Questions</h3>

                <div data-aos="fade-right" className='overflow-hidden relative lg:w-[957px] mx-auto mb-4'>
                    <input type="checkbox" className='absolute ff_roboto top-0 inset-x-0 opacity-0 w-full h-12  z-10 cursor-pointer peer' />
                    <div className='border-[1px] rounded-[10px] peer-checked:border-b-0 peer-checked:rounded-b-[0px]  border-[#C5C5C5] h-14 w-full pl-5 flex items-center'>
                        <h4 className='text-black text-[16px] md:text-[20px] font-medium ff_outfit'>What products can I scan?</h4>
                    </div>
                    <div className='absolute top-5 right-3 transition-transform rotate-0 duration-300 peer-checked:rotate-180'>
                        <Arrow />
                    </div>
                    <div className='transition-all duration-300 rounded-[10px] peer-checked:rounded-t-[0px]  max-h-0 peer-checked:max-h-40 peer-checked:border-t-0 peer-checked:border-[1px] peer-checked:border-[#C5C5C5]'>
                        <div className='p-4 pt-1  '>
                            <p className='text-[16px] font-normal ff_outfit text-black opacity-85 lg:w-[750px]'> You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-left" className='overflow-hidden relative lg:w-[957px] mx-auto mb-4'>
                    <input type="checkbox" className='absolute top-0 inset-x-0 opacity-0 w-full h-12  z-10 cursor-pointer peer' />
                    <div className='border-[1px] rounded-[10px] peer-checked:border-b-0 peer-checked:rounded-b-[0px]  border-[#C5C5C5] h-14 w-full pl-5 flex items-center'>
                        <h4 className='text-black text-[16px] md:text-[20px] font-medium ff_outfit'>Where can I use my rewards?</h4>
                    </div>
                    <div className='absolute top-5 right-3 transition-transform rotate-0 duration-300 peer-checked:rotate-180'>
                        <Arrow />
                    </div>
                    <div className='transition-all duration-300 rounded-[10px] peer-checked:rounded-t-[0px]  max-h-0 peer-checked:max-h-40 peer-checked:border-t-0 peer-checked:border-[1px] peer-checked:border-[#C5C5C5]'>
                        <div className='p-4 pt-1  '>
                            <p className='text-[16px] font-normal ff_outfit text-black opacity-85 lg:w-[750px]'> You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-right" className='overflow-hidden relative lg:w-[957px] mx-auto mb-4'>
                    <input type="checkbox" className='absolute top-0 inset-x-0 opacity-0 w-full h-12  z-10 cursor-pointer peer' />
                    <div className='border-[1px] rounded-[10px] peer-checked:border-b-0 peer-checked:rounded-b-[0px]  border-[#C5C5C5] h-14 w-full pl-5 flex items-center'>
                        <h4 className='text-black text-[16px] md:text-[20px] font-medium ff_outfit'>What kind of impact can I make?</h4>
                    </div>
                    <div className='absolute top-5 right-3 transition-transform rotate-0 duration-300 peer-checked:rotate-180'>
                        <Arrow />
                    </div>
                    <div className='transition-all duration-300 rounded-[10px] peer-checked:rounded-t-[0px]  max-h-0 peer-checked:max-h-40 peer-checked:border-t-0 peer-checked:border-[1px] peer-checked:border-[#C5C5C5]'>
                        <div className='p-4 pt-1  '>
                            <p className='text-[16px] font-normal ff_outfit text-black opacity-85 lg:w-[750px]'> You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-left" className='overflow-hidden relative lg:w-[957px] mx-auto'>
                    <input type="checkbox" className='absolute top-0 inset-x-0 opacity-0 w-full h-12  z-10 cursor-pointer peer' />
                    <div className='border-[1px] rounded-[10px] peer-checked:border-b-0 peer-checked:rounded-b-[0px]  border-[#C5C5C5] h-14 w-full pl-5 flex items-center'>
                        <h4 className='text-black text-[16px] md:text-[20px] font-medium ff_outfit'>Which brands do you partner with?</h4>
                    </div>
                    <div className='absolute top-5 right-3 transition-transform rotate-0 duration-300 peer-checked:rotate-180'>
                        <Arrow />
                    </div>
                    <div className='transition-all duration-300 rounded-[10px] peer-checked:rounded-t-[0px]  max-h-0 peer-checked:max-h-40 peer-checked:border-t-0 peer-checked:border-[1px] peer-checked:border-[#C5C5C5]'>
                        <div className='p-4 pt-1  '>
                            <p className='text-[16px] font-normal ff_outfit text-black opacity-85 lg:w-[750px]'> You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Frequently
