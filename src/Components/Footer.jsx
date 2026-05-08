import React from 'react'
import { Link } from 'react-router'
import { faArrowRight, faEnvelope, faLightbulb, faLocation, faLocationPin, faPaperPlane, faPhone, faRocket, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faInstagramSquare, faSquareYoutube, faTiktok, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (

        <div className='pt-20 bg-primaryCardColor py-40 px-10 flex   w-full justify-around max-xl:flex-col-reverse max-xl:items-center max-xl:text-center max-xl:gap-8'>
            {/* Contact Information Container */}
            <div className='container flex justify-around'>

                <div>
                    <div className=''>
                        <p className='text-white font-semibold'>Contact Information</p>
                        <div className='pt-2 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faPhone} className='text-white w-[12px] h-[12px]' />
                            <p className='text-white text-[12px]'>(555) 555-5555</p>
                        </div>
                        <div className='pt-2 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-white w-[12px] h-[12px]' />
                            <p className='text-white text-[12px]'>AboveLogiX1@gmail.com</p>
                        </div>
                        <div className='pt-2 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faLocationPin} className='text-white w-[12px] h-[12px]' />
                            <p className='text-white text-[12px]'>Georgia, US</p>
                        </div>
                    </div>
                    {/* Social Media Container */}

                </div>

                {/* Links Section */}
                <div>
                    <div className=' '>
                        <p className='text-white font-semibold'>Quick Links</p>
                        <div className='flex flex-col gap-2'>
                            <Link to='/' className='text-white text-[12px] pt-2'>Home</Link>
                            <Link to='/Services' className='text-white text-[12px]'>Services</Link>
                            <Link to='/FAQ' className='text-white text-[12px]'>FAQ</Link>
                            <Link to='/About' className='text-white text-[12px]'>About</Link>
                        </div>

                    </div>
                </div>

                {/* Links Section */}
                <div>
                </div>

            </div>

        </div>
    )
}

export default Footer