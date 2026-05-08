import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Pricing = () => {
    return (
        <div className='h-fit py-20 container'>

            <div>
                <div className='text-center'>
                    <p className='text-white text-[20px] font-normal'>Pricing Plans</p>
                    <p className='text-white text-[34px] font-semibold'>Simple, Transparent <span className='text-primary'>Pricing</span></p>
                </div>

                <div className='pt-20 flex gap-4 justify-center items-center max-md:flex-col '>

                    {/* Basic Price Card */}
                    <div className='w-[400px] bg-primaryCardColor bg-gradient-to-r from-primary  to-secondary  rounded-lg p-[1.5px] relative flex flex-col justify-between  '>
                        <div className='flex flex-col h-[600px]   justify-between gap-4 rounded-[calc(1rem-1px)] bg-gray-900 p-6 text-white'>

                            <div>

                                <div className='flex flex-col gap-1'>
                                    <p className='text-primary font-semibold'>Basic</p>
                                    <p className='text-[24px] font-semibold text-white'>Starter</p>
                                    <p className='text-white opacity-65'>Perfect for small businesses and personal projects</p>
                                </div>

                                <div>
                                    <p className='text-[38px] text-white font-semibold'>$499</p>
                                    <p className='text-white opacity-65'>One-time payment</p>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                        <p className='text-white opacity-65'>1 - 5 Pages Website</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                        <p className='text-white opacity-65'>Responsive Design</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                        <p className='text-white opacity-65'>Basic SEO Setup</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                        <p className='text-white opacity-65'>Contact Form</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                        <p className='text-white opacity-65'>2 Revisions</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                        <p className='text-white opacity-65'>7 Days Support</p>
                                    </div>

                                </div>
                            </div>

                            <div className='self-center '>
                                <button className='text-white '>Get Started</button>
                            </div>
                        </div>

                    </div>
                    {/* Basic Price Card */}

                    {/* <div class="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">

                        <div class="flex h-full w-full items-center justify-center rounded-[calc(1rem-1px)] bg-gray-900 p-6 text-white">
                            Gradient Border Content
                        </div>
                    </div> */}

                    <div className='w-[400px] bg-primaryCardColor bg-gradient-to-r from-primary  to-secondary  rounded-lg p-[1.5px] relative flex flex-col justify-between  '>
                        <div className='flex flex-col h-[600px]   justify-between gap-4 rounded-[calc(1rem-1px)] bg-gray-900 p-6 text-white'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-primary font-semibold'>Standard</p>
                                <p className='text-[24px] font-semibold text-white'>Business</p>
                                <p className='text-white opacity-65'>Perfect for small businesses and personal projects</p>
                            </div>

                            <div>
                                <p className='text-[38px] text-white font-semibold'>$999</p>
                                <p className='text-white opacity-65'>One-time payment</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>1 - 5 Pages Website</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>Responsive Design</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>Basic SEO Setup</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>Contact Form</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>2 Revisions</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>7 Days Support</p>
                                </div>

                            </div>
                            <div className='self-center '>
                                <button className='text-white '>Get Started</button>
                            </div>
                        </div>


                    </div>


                    <div className='w-[400px] bg-primaryCardColor bg-gradient-to-r from-primary  to-secondary  rounded-lg p-[1.5px] relative flex flex-col justify-between  '>
                        <div className='flex flex-col h-[600px]   justify-between gap-4 rounded-[calc(1rem-1px)] bg-gray-900 p-6 text-white'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-primary font-semibold'>Premium</p>
                                <p className='text-[24px] font-semibold text-white'>Enterprise</p>
                                <p className='text-white opacity-65'>Perfect for small businesses and personal projects</p>
                            </div>

                            <div>
                                <p className='text-[38px] text-white font-semibold'>$1,999+</p>
                                <p className='text-white opacity-65'>One-time payment</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>1 - 5 Pages Website</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>Responsive Design</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>Basic SEO Setup</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>Contact Form</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>2 Revisions</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                    <p className='text-white opacity-65'>7 Days Support</p>
                                </div>

                            </div>
                            <div className='self-center '>
                                <button className='text-white '>Get Started</button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing