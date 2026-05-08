import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons'
const FAQ = () => {

    const [openQuestion1, setOpenQuestion1] = useState(false)
    const [openQuestion2, setOpenQuestion2] = useState(false)
    const [openQuestion3, setOpenQuestion3] = useState(false)
    const [openQuestion4, setOpenQuestion4] = useState(false)
    const [openQuestion5, setOpenQuestion5] = useState(false)

    const handleFaqQuestion = (question, setQuestion) => {

        if (question == true) {
            setQuestion(false)
        }
        else {
            setQuestion(true)
        }

    }

    return (

        <div className='h-full container  px-4 pb-20   mx-auto justify-between max-sm:flex-col '>

            <div className='self-start'>
                <p className='text-[50px] font-semibold text-white pt-20 max-sm:text-[26px]'>Frequently Asked <span className='text-primary'>Questions</span></p>
                <p className='text-[16px] text-white pt-2 font-light max-sm:text-[14px]'>Answers to common questions about our services, process, and development approach.</p>
            </div>

            <div>
                <div className='pt-10'>
                    <div className='border-b-[1.2px] border-b-gray-600 border-solid pb-3 max-w-[700px]'>
                        <div className=' flex justify-between items-center max-w-[700px] '>
                            <p className='text-white font-semibold text-[18px] max-sm:text-[12px]'>How long does it take to build a website or mobile app?</p>
                            <button onClick={() => handleFaqQuestion(openQuestion1, setOpenQuestion1)} className='text-white text-[20px] transition'><FontAwesomeIcon icon={faAngleDown} className={openQuestion1 ? "rotate-180 w-[18px] h-[18px] transition " : "w-[18px] h-[18px]"} /></button>
                        </div>
                        <div className={openQuestion1 ? 'pt-4 ' : "hidden"}>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: openQuestion1 ? 1 : 0, y: openQuestion1 ? 0 : -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className='text-gray-300 text-[14px] max-w-[700px] '>Every project timeline depends on the complexity, features, and scope of work. Simple websites can take a few days to a few weeks, while custom web applications or mobile apps may take several weeks or longer. At Above LogiX LLC
                                , we focus on delivering clean, scalable, and high-quality solutions while keeping you updated throughout the entire process.</motion.p>
                        </div>

                    </div>
                    <div className='border-b-[1.2px] border-gray-600 border-solid pb-3 max-w-[700px]'>
                        <div className=' flex justify-between items-center max-w-[700px] pt-4 '>
                            <p className='text-white font-semibold text-[18px] max-sm:text-[12px]'>How much do your services cost?</p>
                            <button onClick={() => handleFaqQuestion(openQuestion2, setOpenQuestion2)} className='text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} className={openQuestion2 ? "rotate-180 w-[18px] h-[18px] transition " : "w-[18px] h-[18px]"} /></button>
                        </div>
                        <div className={openQuestion2 ? 'pt-4 ' : "hidden"}>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: openQuestion2 ? 1 : 0, y: openQuestion2 ? 0 : -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className='text-white text-[14px] max-w-[700px]'>Pricing varies based on the project requirements, functionality, design complexity, and integrations needed. We provide custom quotes tailored to each client’s goals and budget. Whether you need a landing page, business website, or custom software solution, we aim to provide affordable and scalable solutions without sacrificing quality.</motion.p>
                        </div>

                    </div>
                    <div className='border-b-[1.2px] border-gray-600 border-solid pb-3 max-w-[700px]'>
                        <div className=' flex justify-between items-center max-w-[700px] pt-4 '>
                            <p className='text-white font-semibold text-[18px] max-sm:text-[12px]'>Do you work with small businesses and startups?</p>
                            <button onClick={() => handleFaqQuestion(openQuestion3, setOpenQuestion3)} className='text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} className={openQuestion3 ? "rotate-180 w-[18px] h-[18px] transition " : "w-[18px] h-[18px]"} /></button>
                        </div>
                        <div className={openQuestion3 ? 'pt-4 ' : "hidden"}>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: openQuestion3 ? 1 : 0, y: openQuestion3 ? 0 : -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className='text-white text-[14px] max-w-[700px]'>Yes. We work with startups, entrepreneurs, and small businesses looking to build a strong online presence or launch digital products. Our goal is to help businesses grow through modern websites, mobile applications, and custom software solutions designed to fit their brand and vision.</motion.p>
                        </div>

                    </div>
                    <div className='border-b-[1.2px] border-gray-600 border-solid pb-3 max-w-[700px]'>
                        <div className=' flex justify-between items-center max-w-[700px] pt-4 '>
                            <p className='text-white font-semibold text-[18px] max-sm:text-[12px]'>Will my website be mobile-friendly and SEO optimized?</p>
                            <button onClick={() => handleFaqQuestion(openQuestion4, setOpenQuestion4)} className='text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} className={openQuestion4 ? "rotate-180 w-[18px] h-[18px] transition " : "w-[18px] h-[18px]"} /></button>
                        </div>
                        <div className={openQuestion4 ? 'pt-4 ' : "hidden"}>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: openQuestion4 ? 1 : 0, y: openQuestion4 ? 0 : -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className='text-white text-[14px] max-w-[700px]'>Absolutely. Every project is designed to be fully responsive across desktops, tablets, and mobile devices. We also implement modern SEO best practices such as fast performance, optimized structure, accessibility, and proper metadata to help improve visibility on search engines like Google.</motion.p>
                        </div>

                    </div>
                    <div className='border-b-[1.2px] border-gray-600 border-solid pb-3 max-w-[700px]'>
                        <div className=' flex justify-between items-center max-w-[700px] pt-4 '>
                            <p className='text-white font-semibold text-[18px] max-sm:text-[12px]'>Do you provide support after the project is completed?</p>
                            <button onClick={() => handleFaqQuestion(openQuestion5, setOpenQuestion5)} className='text-white text-[20px]'><FontAwesomeIcon icon={faAngleDown} className={openQuestion5 ? "rotate-180 w-[18px] h-[18px] transition " : "w-[18px] h-[18px]"} /></button>
                        </div>
                        <div className={openQuestion5 ? 'pt-4 ' : "hidden"}>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: openQuestion5 ? 1 : 0, y: openQuestion5 ? 0 : -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className='text-white text-[14px] max-w-[700px]'>Yes. We offer ongoing support, updates, maintenance, and assistance after launch to ensure everything continues running smoothly. Whether you need future improvements, bug fixes, or additional features, we’re available to help your business continue growing.</motion.p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default FAQ