import React from 'react'
import star from '../assets/image/webp/star.webp'
import favirote from '../assets/image/webp/favorite.webp'
import dubble_chatt from '../assets/image/webp/chat_bubble.webp'
import upload from '../assets/image/webp/upload.webp'
import stap_three from '../assets/image/webp/stap_three.webp'
import no from '../assets/image/webp/no.webp'
import night_img from '../assets/image/webp/night_img.webp'
const Take_view = () => {
    return (
        <div className=' bg-[#EFEFEF] pb-2 lg:pb-[103px]' id='Article'>
            <p className=' font-normal text-center ff_roboto lg:pt-[114px] pt-10 lg:pb-[75px] pb-5 lg:text-5xl md:text-4xl text-[25px] leading-normal text-[#000]' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900">Let’s Take a <span className=' font-semibold ff_roboto lg:text-5xl md:text-4xl text-[25px] leading-normal text-[#000]'>View</span></p>
            <div className=' mx-auto px-3 !max-w-[1140px]'>
                <div className=' w-full bg-[#D7D7D7] h-[1px]'></div>
                <div className=' lg:flex-row flex-col flex gap-4 lg:gap-28 pt-5'>
                    <div className='w-full lg:w-4/12'data-aos="fade-right">
                        <img className=' mx-auto w-full max-w-[364px] h-full max-h-[225px]' src={star} alt="" />
                    </div>
                    <div className=' w-full lg:w-8/12'data-aos="fade-left">
                        <p className=' text-[18px] ff_roboto font-medium text-center lg:text-start leading-normal text-[#FF5CD7]'>July 2023</p>
                        <p className='ff_roboto font-medium text-2xl text-center lg:text-start text-[#000000] py-4'>Join  us on our next challenge</p>
                        <p className='ff_roboto  font-normal textcolor text-center lg:text-start text-base '>Working with feedback</p>
                        <p className='ff_roboto font-normal textcolor text-center lg:text-start text-sm py-4 '>April 9 - LIOR KRENGEL</p>
                        <p className='ff_roboto  text-[18px] ff_roboto font-medium leading-normal text-[#FF5CD7] relative underline after:bottom-0 cursor-pointer after:left-0 after:bg-[#FF5CD7] after:h-[2px] lg:text-start text-center'>Read more</p>
                        <div className=' flex justify-between pt-5'>
                            <span className=' gap-[2px] flex items-center'>
                                <img className=' cursor-pointer hover:scale-[1.3] ease-in-out duration-300' src={favirote} alt="" />
                                <p className=' text-[#000] text-[20px] ff_roboto font-medium'>2</p>
                            </span>
                            <img className=' cursor-pointer hover:scale-[1.3] ease-in-out duration-300' src={dubble_chatt} alt="" />
                            <img className=' cursor-pointer hover:scale-[1.3] ease-in-out duration-300' src={upload} alt="" />
                        </div>
                    </div>

                </div>
                <div className=' w-full bg-[#D7D7D7] h-[1px] mt-[22px]'></div>
                <div className=' lg:flex-row flex-col flex gap-4 lg:gap-28 pt-5'>
                    <div className='w-full lg:w-4/12'data-aos="fade-right">
                        <img className=' mx-auto w-full max-w-[364px] h-full max-h-[225px]' src={night_img} alt="" />
                    </div>
                    <div className=' w-full lg:w-8/12'data-aos="fade-left">
                        <p className=' text-[18px] ff_roboto font-medium text-center lg:text-start leading-normal text-[#FF5CD7]'>July 2023</p>
                        <p className='ff_roboto font-medium text-2xl text-center lg:text-start text-[#000000] py-[11px] max-w-[565px] mx-auto lg:mx-0 leading-normal'>Our journey comes to a close flipping the coin and the tools we have gathered</p>
                        <p className='ff_roboto  font-normal textcolor text-center lg:text-start text-base max-w-[565px] leading-6 mx-auto lg:mx-0'>Together we have spent the lst five weeks exploring and practing our healthy Boundaries. We took a step back and connected  with our.....</p>
                        <p className='ff_roboto font-normal textcolor text-center lg:text-start text-sm py-[11px] leading-[21px]'>March 15 - LIOR KRENGEL</p>
                        <p className='ff_roboto  text-[18px] ff_roboto font-medium leading-normal text-[#000000] relative underline after:bottom-0 after:left-0 after:bg-[#000000]  after:h-[2px] lg:text-start text-center cursor-pointer'>Read more</p>
                    </div>

                </div>
                <div className=' w-full bg-[#D7D7D7] h-[1px] mt-[22px]'></div>
                <div className=' lg:flex-row flex-col flex gap-4 lg:gap-28 pt-5'>
                    <div className='w-full lg:w-4/12'data-aos="fade-right">
                        <img className=' mx-auto w-full max-w-[364px] h-full max-h-[225px]' src={no} alt="" />
                    </div>
                    <div className=' w-full lg:w-8/12'data-aos="fade-left">
                        <p className='ff_roboto font-medium leading-normal text-2xl text-center lg:text-start text-[#000000] py-4 max-w-[565px] mx-auto lg:mx-0'>Week five: stepping into our yes with secure expectations</p>
                        <p className='ff_roboto  font-normal textcolor leading-6 text-center lg:text-start text-base  max-w-[565px] mx-auto lg:mx-0'>Together we have spent the lst five weeks exploring and practing our healthy Boundaries. We took a step back and connected  with our.....</p>
                        <p className='ff_roboto font-normal leading-[21px] textcolor text-center lg:text-start text-sm py-4 '>March 15 - LIOR KRENGEL</p>
                        <p className='ff_roboto  text-[18px] cursor-pointer ff_roboto font-medium leading-normal text-[#000] relative underline after:bottom-0 after:left-0 after:bg-[#000] after:h-[2px] lg:text-start text-center'>Read more</p>
                    </div>

                </div>
                <div className=' w-full bg-[#D7D7D7] h-[1px] mt-[22px]'></div>
                <div className=' lg:flex-row flex-col flex gap-4 lg:gap-28 pt-5'>
                    <div className='w-full lg:w-4/12'data-aos="fade-right">
                        <img className=' mx-auto w-full max-w-[364px] h-full max-h-[225px]' src={stap_three} alt="" />
                    </div>
                    <div className=' w-full lg:w-8/12'data-aos="fade-left">
                        <p className='ff_roboto font-medium text-2xl text-center lg:text-start text-[#000000] leading-normal py-4'>Step three: exploring between our yes and no</p>
                        <p className='ff_roboto  font-normal textcolor text-center lg:text-start text-base leading-6 '>A week of international curiosity</p>
                        <p className='ff_roboto font-normal textcolor text-center lg:text-start text-sm py-4  leading-[21px]'>July 21 - LIOR KRENGEL</p>
                        <p className='ff_roboto  text-[18px] ff_roboto font-medium leading-normal text-[#000] relative underline after:bottom-0 after:left-0 cursor-pointer after:bg-[#000] after:h-[2px] lg:text-start text-center'>Read more</p>

                    </div>

                </div>
                <div className=' w-full bg-[#D7D7D7] h-[1px] lg:mt-[22px] mt-3'></div>
                <button className=' py-4 px-[61.5px] hover:bg-white hover:text-black lg:mt-[37px] mt-4 text-white ff_roboto bg-[#FF5CD7] rounded-[264px] mx-auto flex justify-center text-[18px] font-medium leading-normal'>View All</button>
            </div>
        </div>
    )
}

export default Take_view