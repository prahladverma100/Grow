import React from 'react'
import planing from '../assets/image/webp/planing.webp'
import { In, Insta, Meassage } from './Icon'

const Get_upload = () => {
    return (
        <div className=' bg-[#EFEFEF] lg:pt-[60px] pt-9'>
            <div className='px-3 mx-auto !max-w-[1140px]'>
                <div className='flex lg:flex-row lg:pb-36 pb-10 flex-col justify-center'>
                    <div className='w-full lg:w-7/12  relative' data-aos="fade-right">
                        <img className=' w-full lg:mx-0 mx-auto max-h-[410px] max-w-[558px]' src={planing} alt="" />
                        <div className=' bg-white max-w-[327px] absolute left-[0%] bottom-[-12%] rounded-[5px] px-6 py-5'>
                            <div className=' flex items-center gap-5'>
                                <a href="" className=' cursor-pointer hover:scale-[1.2] ease-in-out duration-150'> <Meassage /></a>
                                <a href="" className=' ff_roboto text-xl leading-normal font-normal text-[#000]'>Stepenjohns@gmail.com</a>
                            </div>
                            <div className=' flex gap-[9px] pt-[10px] '>
                                <span className=' cursor-pointer hover:scale-[1.2] ease-in-out duration-150'> <a href="https://www.instagram.com/accounts/login/"><Insta /></a></span>
                                <span className=' cursor-pointer hover:scale-[1.2] ease-in-out duration-150'> <a href="https://in.linkedin.com/school/mdigurgaon/"><In /></a></span>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-5/12 lg:relative  mx-auto flex justify-center ' data-aos="fade-left">
                        <div className=' bg-[#FAF8F8] px-11 lg:left-[-47%]  lg:absolute mt-14  py-7 max-w-[679px]'>
                            <p className=' text-[#111111] lg:text-5xl md:text-4xl text-[30px] font-normal ff_roboto leading-normal'>Get <span className=' text-[#111111] lg:text-5xl md:text-4xl text-[30px] font-semibold ff_roboto leading-normal'>Updated</span>  With Us</p>
                            <p className=' text-[#646363] text-base  font-medium ff_roboto pt-4 pb-7'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                            <form action="erugfuru">
                                <div className=' flex gap-6 borderinpt'>
                                    <input type="text" className='py-[14px] mx-auto flex justify-center lg:justify-start lg:mx-0 ps-4  my-[14px] text_greay text-sm  outline-none rounded-[6px] w-full max-w-[283px] ff_roboto font-normal' placeholder='Your Name' />
                                    <input type="text" className='py-[14px] mx-auto flex justify-center lg:justify-start lg:mx-0 ps-4  my-[14px] text_greay text-sm  outline-none rounded-[6px] w-full max-w-[283px] ff_roboto font-normal' placeholder='Your Email Address' />
                                </div>
                                <div className='borderinpt'>
                                    <textarea type="text" className='mx-auto flex justify-center lg:justify-start lg:mx-0 pt-[14px] pb-[75px] resize-none ps-4 border-[1px] border-[#CCCCCC] outline-none rounded-[6px] w-full max-w-[594px] text-sm ff_roboto font-medium' placeholder='Message'></textarea>
                                </div>
                                <button className=' text-white mt-8 ff_roboto text-[18px]  hover:bg-[transparent] hover:text-black transition-all ease-in-out duration-300  hover:border-[black] border  hover:bg-white  font-medium py-3 px-6 bg-[#FF7DDF] rounded-[40px]'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Get_upload