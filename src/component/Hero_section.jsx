import React, { useState } from 'react'
import logo from '../assets/image/webp/logo.webp'
import Hamburger from 'hamburger-react'

const Hero_section = () => {
    const [isOpen, setOpen] = useState(false);
    const [Show, setShow] = useState(false);
    if (Show === true) {
        document.body.classList.add("max-md:overflow-hidden");
    }
    else {
        document.body.classList.remove("max-md:overflow-hidden");
    }
    const moment = () => {
        setShow(!true);
    };


    return (
        <div className=' header_img bg-no-repeat bg-cover bg-center'>
            <div className=' mx-auto !max-w-[1140px]'>
                <nav className="pt-[18px]">
                    <div className="bg-[#171E25] rounded-[328px] py-[12px] pe-[18.4px] ps-[31px] flex items-center justify-between">
                        <div>
                            <img className="max-w-[63.855px] cursor-pointer" src={logo} alt="#" />
                        </div>
                        <ul className={`flex  justify-center gap-[16px] ${Show ? "left-0" : "left-[-100%]"} h-full max-md:w-full bg-[#171e25]   flex-col md:flex-row top-0 text-center z-20    items-center duration-500 fixed md:static`}>
                            <li>
                                <a className=" text-base ff_roboto  transition-all ease-in-out duration-300 text-[white] text-[16px] font-normal  relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] before:absolute before:bottom-[-2px]  before:left-[0px] before:h-[1px] before:ease-in-out before:duration-300 before:w-0 before:hover:w-[15px] before:bg-[white]" href="#home" onClick={moment}> Home </a>
                            </li>
                            <li> <a className=" text-base ff_roboto transition-all ease-in-out duration-300 text-[white] text-[16px] font-normal  relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] before:absolute before:bottom-[-2px]  before:left-[0px] before:h-[1px] before:ease-in-out before:duration-300 before:w-0 before:hover:w-[15px] before:bg-[white]" href="#about" onClick={moment}> About</a>
                            </li>
                            <li>
                                <a className=" text-base ff_roboto transition-all ease-in-out duration-300 text-[white] text-[16px] font-normal  relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] before:absolute before:bottom-[-2px]  before:left-[0px] before:h-[1px] before:ease-in-out before:duration-300 before:w-0 before:hover:w-[15px] before:bg-[white]" href="#Article" onClick={moment}>Article</a>
                            </li>
                            <li>
                                <a className=" text-base ff_roboto transition-all ease-in-out duration-300 text-[white] text-[16px] font-normal  relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] before:absolute before:bottom-[-2px]  before:left-[0px] before:h-[1px] before:ease-in-out before:duration-300 before:w-0 before:hover:w-[15px] before:bg-[white]" href="#event" onClick={moment}>Events </a>
                            </li>
                            <div className=' md:hidden'>
                                <button className="px-[22px] sm:px-[30.032px] py-[12px] ff_roboto bg-[white] rounded-[114px] font-medium text-[16px] sm:text-[18px] text-black ff_robot hover:bg-[transparent] hover:text-white transition-all ease-in-out duration-300 border-[white] border">  + Subscribe </button>
                            </div>
                        </ul>

                        <div className=' hidden md:block'>
                            <button className="px-[22px] ff_roboto sm:px-[30.032px] py-[12px] bg-[white] rounded-[114px] font-medium text-[16px] sm:text-[18px] text-black ff_robot hover:bg-[transparent] hover:text-white transition-all ease-in-out duration-300 border-[white] border">  + Subscribe </button>
                        </div>
                        <div className="z-30 md:hidden " onClick={() => setShow(!Show)}>
                            <button className="text-[white]">
                                <Hamburger toggled={isOpen} toggle={setOpen} />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className=' px-3 mx-auto lg:pt-[159px] md:pt-14 pt-7 pb-7  lg:pb-[255.87px] md:pb-14' data-aos="fade-up" id='home'>
                <h1 className='lg:text-[64px] linheight md:text-[50px] sm:text-[45px] text-[35px] text-white text-center mx-auto ff_roboto max-w-[793px]'>Meet <span className=' font-semibold '>Work Skill</span>  Your Agency for Growth</h1>
                <p className=' text-base font-normal text-color max-w-[709px] text-center mx-auto pb-[38px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma.</p>
                <button className=' btn-color px-[33px] py-[15px] rounded-[109px] border-[1px] mx-auto flex justify-center hover:bg-white ff_roboto font-medium leading-normal text-[18px] text-white hover:text-black border-white hover:border-[black] '>Get Started</button>
            </div>
        </div>
    )
}

export default Hero_section