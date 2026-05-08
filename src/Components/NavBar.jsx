import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../Images/logo.png'
import { Link } from 'react-router'




const NavBar = () => {


    const [open, setOpen] = useState(false)
    const links = ["Home", "About", "Projects", "Contact", "FAQ"];
    useEffect(() => {

        if (open) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"

        }

    }, [open])
    return (
        <div>
            <div className='max-xl:hidden '>
                <nav className='container p-8 flex justify-between'>
                    <div>
                        <a href='#' >
                            <img src={logo} className='w-[40px]' />
                        </a>
                    </div>
                    <div className='flex gap-10'>
                        <Link to="/AboveLogixLLCWeb" className='text-white hover:text-primary'>Home</Link>
                        <Link to="AboveLogixLLCWeb/Portfolio" className='text-white hover:text-primary'>Portfolio</Link>
                        <Link to="AboveLogixLLCWeb/Services" className='text-white hover:text-primary'>Services</Link>
                        <Link to="AboveLogixLLCWeb/FAQ" className='text-white hover:text-primary'>FAQ</Link>
                        <Link to="AboveLogixLLCWeb/About" className='text-white hover:text-primary'>About</Link>
                    </div>
                </nav>
            </div>

            <div className=' flex justify-end  p-4 '>
                <button
                    onClick={() => setOpen(!open)}
                    className=" xl:hidden flex flex-col gap-2 z-10"
                >
                    <motion.span
                        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-10 h-1 bg-white rounded-full block"
                    />
                    <motion.span
                        animate={open ? { opacity: 0 } : { opacity: 1 }}
                        className="w-7 h-1 bg-white rounded-full block"
                    />
                    <motion.span
                        animate={open ? { rotate: -45, y: -16 } : { rotate: 0, y: 0 }}
                        className="w-10 h-1 bg-white rounded-full block"
                    />
                </button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: -300, }}
                        animate={{ opacity: 1, x: 0, }}
                        transition={{ duration: 0, ease: "easeIn" }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="flex absolute xl:w-full xl;:h-full h-full w-full bg-black  z-2 top-0 flex-col justify-center items-center gap-5 pt-6 pb-4 px-2">
                            {links.map((link) => (
                                <Link
                                    key={link}
                                    to={`AboveLogixLLCWeb/${link}`}
                                    onClick={() => setOpen(false)}
                                    className="text-lg hover:text-purple-400 text-white active:font-bold "
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default NavBar