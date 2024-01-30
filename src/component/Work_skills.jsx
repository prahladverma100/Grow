import React from 'react'
import works_skills from '../assets/image/webp/work_skills.webp'

const Work_skills = () => {
    return (
        <div className=' bg-[#EFEFEF] lg:pt-[139px] pt-10 pb-10 lg:pb-[131px]'>
            <div className='px-3 mx-auto !max-w-[1140px]' id='about'>
                <div className=' flex lg:flex-row flex-col'>
                    <div className=' w-full lg:w-7/12 ' data-aos="fade-right">
                        <img className=' w-full max-w-[679px] mx-auto h-full max-h-[495px]' src={works_skills} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2' data-aos="fade-left">
                        <div className=' bg-white mx-auto rounded-[5px] lg:translate-x-[-70px] translate-x-0  lg:w-[557px] max-w-[557px] px-6 py-6 my-4'>
                            <p className=' font-semibold ff_roboto lg:text-5xl md:text-4xl text-[25px] leading-normal text-[#000]'>Welcome  <span className='font-normal ff_roboto lg:text-5xl md:text-4xl text-[25px] leading-normal text-[#000]'>to Work Skills</span></p>
                            <ul className=' list-disc ps-6'>
                                <li className='text-base font-normal  ff_roboto text-color textcolor pt-5'>Work Skills is built for young professionals who want to enhance their soft skills to overcome the challenges they often face during the early first years of work.</li>
                                <li className='text-base font-normal ff_roboto text-color textcolor py-3'>In a practical and growth-oriented approach, we help young professionals develop and strengthen essential skills such as boundaries-setting, communication, adaptability, and others.</li>
                                <li className='text-base font-normal ff_roboto text-color textcolor'>In this way, we aim to empower young professionals to navigate their careers with confidence and success.</li>
                            </ul>
                            <button className='text-[18px] ease-in-out duration-300 ff_roboto text-white leading-normal bg-[#FF5CD7] py-4 hover:bg-white hover:border-black hover:text-black border-[1px] px-[34px] rounded-[264px] mt-[52px]'>Subscribe</button>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Work_skills