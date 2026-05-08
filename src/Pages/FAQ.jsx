import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faPlus } from '@fortawesome/free-solid-svg-icons'
const FAQ = () => {

    const [open, setOpen] = useState(false)

    const handleQuestion1 = () => {

        if (open == true) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }

    }


    return (

        <div className='h-[60vh] container  px-4'>
            <div>
                <p className='text-[50px] text-white pt-20 max-sm:text-[30px]'>Frequently Asked Questions</p>
                <p className='text-[16px] text-white pt-2 font-light max-sm:text-[14px]'>Answers to common questions about our services, process, and development approach.</p>
            </div>
            <div className='pt-10'>
                <div className='border-b-[1.2px] border-b-gray-600 border-solid pb-3 max-w-[700px]'>
                    <div className=' flex justify-between items-center max-w-[700px] '>
                        <p className='text-white font-bold text-[18px] max-sm:text-[13px]'>How long does it take to build a website or mobile app?</p>
                        <button onClick={handleQuestion1} className='text-white text-[20px] transition'><FontAwesomeIcon icon={faPlus} className={open ? "rotate-180 w-[18px] h-[18px] transition " : "w-[18px] h-[18px]"} /></button>
                    </div>
                    <div className={open ? 'pt-4 ' : "hidden"}>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className='text-white text-[14px] max-w-[700px]'>Every project timeline depends on the complexity, features, and scope of work. Simple websites can take a few days to a few weeks, while custom web applications or mobile apps may take several weeks or longer. At Above LogiX LLC
                            , we focus on delivering clean, scalable, and high-quality solutions while keeping you updated throughout the entire process.</motion.p>
                    </div>

                </div>
                <div className='border-b-[1.2px] border-gray-600 border-solid pb-3 max-w-[700px]'>
                    <div className=' flex justify-between items-center max-w-[700px] pt-4 '>
                        <p className='text-white font-bold text-[18px]'>How much do your services cost?</p>
                        <button onClick={handleQuestion1} className='text-white text-[20px]'><FontAwesomeIcon icon={faPlus} className={open ? "rotate-180 w-[18px] h-[18px] " : "w-[18px] h-[18px]"} /></button>
                    </div>
                    <div className={open ? 'pt-4 ' : "hidden"}>
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className='text-white text-[14px] max-w-[700px]'>Pricing varies based on the project requirements, functionality, design complexity, and integrations needed. We provide custom quotes tailored to each client’s goals and budget. Whether you need a landing page, business website, or custom software solution, we aim to provide affordable and scalable solutions without sacrificing quality.</motion.p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FAQ