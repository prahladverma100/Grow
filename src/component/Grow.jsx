import React from 'react'
import logo_grow from '../assets/image/webp/logo_grow.webp'

const Grow = () => {
    return (
        <div className=' bg_img bg-no-repeat bg-cover bg-center pb-[42px]'>
            <div className=' mx-auto px-3 !max-w-[1140px]' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900">
                <img className=' mx-auto pt-[42px] cursor-pointer' src={logo_grow} alt="" />
                <p className=' max-w-[862px] text-center mx-auto ff_roboto font-normal py-[19px] lg:text-5xl md:text-4xl text-3xl leading-[120.5%] text-white'>Join work skill and start <span className='max-w-[862px] ff_roboto font-semibold  lg:text-5xl md:text-4xl sm:text-3xl text-2xl  leading-[120.5%] text-white'>work on your soft skills now</span>  and change yourself</p>
                <p className=' text-color max-w-[534px] text-center mx-auto font-normal text-base ff_roboto'>Lpsum diam curabitur tincidunt sed vitae nulla a porttitor sed. Eros sem sed gravida in nulla dictum </p>
                <button className='text-[18px] duration-300 ease-in-out  hover:bg-white hover:text-black  ff_roboto mx-auto flex justify-center text-white leading-normal bg-[#FF5CD7] py-4 px-[34px] rounded-[264px] mt-[52px]'>Subscribe</button>
            </div>
        </div>
    )
}

export default Grow