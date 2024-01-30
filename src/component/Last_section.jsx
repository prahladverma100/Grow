import React from 'react'
import logo_grow from '../assets/image/webp/logo_grow.webp'
import bookmarks from '../assets/image/webp/bookmarks.webp'
import { Arrow } from './Icon'

const Last_section = () => {
    return (
        <div className=' footer_img bg-no-repeat bg-center bg-cover pt-6' id='event'>
            <div className=' mx-auto px-3 !max-w-[1140px]'>
                <div className=' flex justify-center'>
                    <img className=' cursor-pointer' src={logo_grow} alt="" />
                </div>
                <p className='font-normal text-center text-white py-[33px] ff_roboto  '><span className='text-color1'>©</span>
                    2023 Lior krengle . <span className='underline'> Privacy</span> . <span className='underline'>Terms</span> . <span className='underline'> Collection Notice</span>  </p>
                <div className=' gap-4 flex justify-center pb-7'>
                    <button className=' md:text-[18px] text-sm font-medium leading-normal  hover:bg-[transparent] hover:text-white transition-all ease-in-out duration-300 border-[white] border ff_roboto px-7 py-[14px] bg-white  flex rounded-[264px] gap-[10px]'><img src={bookmarks} alt="" />Start Writing</button>
                    <button className='md:text-[18px] text-sm font-medium leading-normal  hover:bg-[transparent] hover:text-white transition-all ease-in-out duration-300 border-[white] border ff_roboto px-8 py-4 bg-white flex rounded-[264px]'>Get the app</button>
                </div>
                <div className=' w-full h-[1px] bg-color'></div>
                <p className=' pt-[30px]  text-color1 text-center pb-7'> <span className=' underline'> Substack </span>is the home for great writing</p>
            </div>
        </div>
    )
}

export default Last_section