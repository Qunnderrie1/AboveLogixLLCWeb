import React from 'react'
import project1 from '../Images/mockup-1.png'
import project2 from '../Images/mockup-2.png'
import { faArrowRight, faEnvelope, faLightbulb, faLocation, faLocationPin, faPaperPlane, faPhone, faRocket, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlurCircle from '../Components/BlurCircle';



const Portfolio = () => {
    return (
        <div className='container h-fit py-20'>
            <div className='text-center'>
                <p className='text-white text-[20px] font-normal'>Our Work</p>
                <p className='text-white text-[34px] font-semibold'>Projects Built to <span className='text-primary'>Perform</span></p>
            </div>
            <div className='pt-20 flex gap-4 max-xl:flex-col  md:items-center'>
                <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex   gap-10  max-w-[700px] h-[300px] px-8 py-4 '>
                    <BlurCircle width={'500px'} height={'500px'} location={'right-0'} />
                    <img src={project1} className='resize img-fluid w-[200px] max-xl:w-[150px] max-xl:h-[150px]' />
                    <div className='flex flex-col  gap-2 pt-3 relative'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-white text-[20px] font-semibold max-xl:text-[15px]'>Job Tracker Web App</p>
                            <p className=' text-left text-[12px] leading-7 opacity-55  max-xl:text-[12px] bg-primary w-fit px-3 rounded-full text-primary-dark '>Web Application</p>
                            <p className='text-white text-[12px] max-xl:text-[15px] max-sm:text-[12px]'>A complete job tracking platform to manage job applcations </p>
                        </div>

                        <div className='container pt-10'>
                            <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
                        </div>
                        <button className='absolute bottom-0 text-white max-xl:text-[15px] text-[13px] max-sm:text-[12px]'>Launch Project <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>

                </div>
                <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex   gap-2  max-w-[700px] h-[300px] px-8 py-4 '>
                    <img src={project2} className='resize img-fluid w-[300px]  max-xl:w-[150px] max-xl:h-[150px]' />
                    <div className='flex flex-col  gap-2 pt-3 relative'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-white text-[20px] font-semibold max-xl:text-[15px]'>Mortgage Calculator</p>
                            <p className=' text-left text-[12px] leading-7 opacity-55  max-xl:text-[12px] bg-primary w-fit px-3 rounded-full text-primary-dark '>Web Application</p>
                            <p className='text-white text-[12px] max-xl:text-[15px] max-sm:text-[12px]'>A complete job tracking platform to manage job applcations </p>
                        </div>
                        <div className='container pt-10'>
                            <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
                        </div>
                        <button className='absolute bottom-0 text-white max-xl:text-[15px] text-[13px] max-sm:text-[12px]'>Launch Project <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio