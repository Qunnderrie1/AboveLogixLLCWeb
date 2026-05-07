
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faArrowRight, faEnvelope, faLightbulb, faLocation, faLocationPin, faPaperPlane, faPhone, faRocket, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import project1 from './Images/mockup-1.png'
import project2 from './Images/mockup-2.png'
import { useEffect, useState } from 'react';
import BlurCircle from './Components/BlurCircle';
import { faFacebookF, faInstagram, faInstagramSquare, faSquareYoutube, faTiktok, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import logo from './Images/logo.png'


function App() {


  const [open, setOpen] = useState(false)
  const links = ["Home", "About", "Projects", "Contact"];


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  //  Reference for animating section
  const ref1 = useRef(null);

  const isInView1 = useInView(ref1, {
    once: true
  })

  const ref2 = useRef(null);

  const isInView2 = useInView(ref2, {
    once: true
  })

  const ref3 = useRef(null);

  const isInView3 = useInView(ref3, {
    once: true
  })
  const ref4 = useRef(null);

  const isInView4 = useInView(ref4, {
    once: true
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phoneNumber || !email || !message) {
      console.log("Enter all values")
    } else {
      setEmail("")
      setFirstName("")
      setLastName("")
      setPhoneNumber("")
    }
  }

  const handleNav = () => {
    console.log("Opening")
  }

  useEffect(() => {

    if (open) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"

    }

  }, [open])

  return (
    <div className="App bg-[#000121]">

      {/* NavBar Section */}
      <div className='max-xl:hidden '>
        <nav className='container p-8 flex justify-between'>
          <div>
            <a href='#' >
              <img src={logo} className='w-[40px]' />
            </a>
          </div>
          <div className='flex gap-10'>
            <a href='#Home' className='text-white hover:text-primary'>Home</a>
            <a href='#Projects' className='text-white hover:text-primary'>Portfolio</a>
            <a href='#Services' className='text-white hover:text-primary'>Services</a>
            <a href='#About' className='text-white hover:text-primary'>About</a>
          </div>
        </nav>
      </div>

      <div onClick={handleNav} className=' flex justify-end  p-4 '>
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
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-purple-400 text-white active:font-bold "
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* NavBar Section */}

      <div className='container max-xl:hidden '>
        <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
      </div>

      {/* Hero Section */}

      <div id='Home' className='h-fit container pt-40 relative '>
        <BlurCircle width={'400px'} height={'400px'} location={'right-[50%]'} />
        <div className='flex max-xl:flex-col-reverse max-xl:justify-center container '>
          <div className=''>
            <div className='w-[660px] text-left max-xl:w-fit'>

              <motion.h1
                initial={{
                  opacity: 0,
                  x: -50,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}

                className='text-white text-[60px] font-semibold max-xl:text-[50px] max-xl:text-center max-md:text-[30px] md:text-[34px]'>
                Building <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold'>High Quailty</span>, modern websites that will grow your <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Business</span>.</motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -20, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='text-white text-left pt-2 max-xl:text-[12px] max-xl:text-center'>Above LogiX helps entrepreneurs and small businesses bring their ideas to life with modern, scalable software solutions.</motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='mt-10 flex gap-10 max-xl:justify-center'>
              <motion.button
                className='bg-gradient-to-r from-primary to-secondary  text-white w-[180px] h-[50px] rounded-md font-semibold max-xl:w-[150px] max-xl:h-[40px]'>Start Project </motion.button>
              <button className=' text-white w-[180px] h-[50px] rounded-md border-[1.5px] max-xl:w-[150px] max-xl:h-[40px] '>View Portfilio </button>
            </motion.div>
            <div className='pt-20 flex gap-4 max-xl:justify-center'>
              <a href='http://www.instagram.com/abovelogix' >
                <FontAwesomeIcon icon={faInstagram} className='border-1 rounded-full w-[14px] h-[14px] text-white p-2' />
              </a>
              <a href='http://www.facebook.com/abovelogix' >
                <FontAwesomeIcon icon={faFacebookF} className='border-1 rounded-full w-[14px] h-[14px] text-white p-2' />
              </a>
              <a href='https://www.youtube.com/@AboveLogiX' >
                <FontAwesomeIcon icon={faYoutubeSquare} className='border-1 rounded-full w-[14px] h-[14px] text-white p-2' />
              </a>

            </div>
          </div>
          <div className='max-xl:flex max-xl:justify-center'>
            <motion.img
              initial={{ opacity: 0, y: -20, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={project1} className='xl:w-[300px]  md:w-[350px]' ></motion.img>
          </div>
        </div>
      </div>
      {/* Hero Section */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 50,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}

        className="text-6xl font-bold"
      >

      </motion.h1>

      <div className='container py-20'>
        <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
      </div>

      {/* About Section */}

      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id='About' className='h-fit container '>
        <div className='flex flex-col justify-center items-center'>
          <p className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-[24px] text-center font-semibold'>About Us</p>
          <p className='text-white text-[40px] text-center font-semibold max-xl:text-[30px]'>We Build Digital Solutions</p>
          <p className='text-white text-center w-[700px] text-[20px] opacity-70 pt-4 leading-10 max-xl:text-[14px] max-xl:w-fit font-light'>Above LogiX is a software development company that builds modern, high-performance web and mobile applications tailored to your business needs. We focus on clean design, seamless user experience, and scalable solutions that help businesses grow, streamline operations, and stand out in today’s digital world.</p>

        </div>

        {/* Section Cards */}
        <div className='pt-20 flex gap-4 justify-center max-xl:flex-col md:items-center'>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex flex-col justify-center items-center gap-4   max-w-[400px] h-[300px] px-4 '>
            <FontAwesomeIcon icon={faLightbulb} color='white' className='w-[34px] h-[34px]' />
            <p className='text-white text-[20px] font-semibold'>Tell Us Your Vision</p>
            <p className='text-white text-center leading-7 opacity-55 '>Share your ideas, goals, and what you need built. We listen, research, and understand your vision and business needs.</p>
          </div>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex flex-col justify-center items-center gap-4   max-w-[400px] h-[300px] px-4 '>
            <FontAwesomeIcon icon={faTools} color='white' className='w-[34px] h-[34px]' />
            <p className='text-white text-[20px] font-semibold'>We Design & Develop</p>
            <p className='text-white text-center leading-7 opacity-55 '>Share your ideas, goals, and what you need built. We listen, research, and understand your vision and business needs.</p>
          </div>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex flex-col justify-center items-center gap-4   max-w-[400px] h-[300px] px-4 '>
            <FontAwesomeIcon icon={faRocket} color="white" className='w-[34px] h-[34px]' />
            <p className='text-white text-[20px] font-semibold'>Launch & Grow</p>
            <p className='text-white text-center leading-7 opacity-55 '>Share your ideas, goals, and what you need built. We listen, research, and understand your vision and business needs.</p>
          </div>
        </div>
        {/* Section Cards */}
      </motion.div>

      {/* About Section */}

      <BlurCircle width={"300px"} height={"300px"} location={"left-0"} />


      <div className='container py-40'>
        <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
      </div>

      {/* Why Choose Us Section */}

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id='whychooseus' className='h-fit container'>
        <div>
          <p className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-[24px] text-center font-semibold'>Why Choose Us?</p>
          <p className='text-white text-[40px] text-center font-semibold max-xl:text-[30px]'>What Makes Us Different</p>
        </div>

        <div className='flex justify-center pt-20 gap-4 max-xl:flex-col  md:items-center '>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E]  rounded-md flex items-center  gap-10  max-w-[400px] h-[140px] px-8 py-4 '>
            <div className='flex flex-col justify-center gap-2'>
              <p className='text-white text-[18px] font-semibold'>Clean & Professional</p>
              <p className='text-white text-left text-[14px] leading-7 opacity-55 '>Designed to reflect high quailty solutaions built to grow your business.</p>
            </div>

          </div>
          <div className='bg-primaryCardColor border-[1px]  md:items-center border-[#2E2E2E] rounded-md flex items-center   gap-10   max-w-[400px] h-[140px] px-8 py-4 '>

            <div className='flex flex-col justify-center gap-2'>
              <p className='text-white text-[18px] font-semibold'>Trust-Focused</p>
              <p className='text-white text-left text-[14px] file: leading-7 opacity-55 '>Built on transparency, quailty, and results you can count on.</p>
            </div>

          </div>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex items-center   gap-10   max-w-[400px] h-[140px] px-8 py-4 '>

            <div className='flex flex-col justify-center gap-2'>
              <p className='text-white text-[18px] font-semibold'>Straight to the Point</p>
              <p className='text-white text-left text-[14px] leading-7 opacity-55 '>No shortcuts, No confusion, just results.</p>
            </div>

          </div>
        </div>
        <div className='flex justify-center pt-4 gap-4 max-xl:flex-col  md:items-center '>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex items-center  gap-10  max-w-[400px] h-[140px] px-8 py-4 '>

            <div className='flex flex-col justify-center gap-2'>
              <p className='text-white text-[18px] font-semibold'>Growth-Focused</p>
              <p className='text-white text-left text-[14px] leading-7 opacity-55 '>We build digitals solutions designed to scale with your vision.</p>
            </div>

          </div>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex items-center   gap-10   max-w-[400px] h-[140px] px-8 py-4 '>

            <div className='flex flex-col justify-center gap-2'>
              <p className='text-white text-[18px] font-semibold'>Premium/High-Ticket</p>
              <p className='text-white text-left text-[14px] leading-7 opacity-55 '>Where strategy, design, and development come together to create real impact.</p>
            </div>

          </div>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex items-center   gap-10   max-w-[400px] h-[140px] px-8 py-4 '>

            <div className='flex flex-col justify-center gap-2'>
              <p className='text-white text-[18px] font-semibold'>Smart & Modern</p>
              <p className='text-white text-left text-[14px] leading-7 opacity-55 '>Focused on performance, built for the future.</p>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}


      <div className='container py-40'>
        <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
      </div>



      {/* Project Section */}

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id='Projects' className='h-fit container pb-20 '>
        <div>
          <p className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-[24px] text-center font-semibold'>Our Work</p>
          <p className='text-white text-[40px] text-center font-semibold max-xl:text-[30px]'>Projects We Are Proud Of</p>
        </div>


        <div className='pt-20 flex gap-4 max-xl:flex-col  md:items-center'>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex   gap-10  max-w-[700px] h-[300px] px-8 py-4 '>
            <img src={project1} className='resize img-fluid w-[200px] max-xl:w-[150px] max-xl:h-[150px]' />
            <div className='flex flex-col  gap-2 pt-3 relative'>
              <p className='text-white text-[20px] font-semibold max-xl:text-[15px]'>Job Tracker Web App</p>
              <p className='text-white text-left leading-7 opacity-55  max-xl:text-[15px] '>Web Application</p>
              <p className='text-white opacity-55 max-xl:text-[15px]'>A complete job tracking platform to manage job applcations </p>
              <button className='absolute bottom-0 text-white max-xl:text-[15px]'>Launch Project <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

          </div>
          <div className='bg-primaryCardColor border-[1px] border-[#2E2E2E] rounded-md flex   gap-2  max-w-[700px] h-[300px] px-8 py-4 '>
            <img src={project2} className='resize img-fluid w-[300px]  max-xl:w-[150px] max-xl:h-[150px]' />
            <div className='flex flex-col  gap-2 pt-3 relative'>
              <p className='text-white text-[20px] font-semibold max-xl:text-[15px]'>Mortage Calculator</p>
              <p className='text-white text-left leading-7 opacity-55 max-xl:text-[15px]  '>Web Application</p>
              <p className='text-white opacity-55 max-xl:text-[15px]'>A complete job tracking platform to manage job applcations </p>
              <button className='absolute bottom-0 text-white max-xl:text-[15px]'>Launch Project <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Project Section */}


      <div className='container py-40'>
        <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
      </div>


      {/* Footer Section */}

      <div id='contact' className='h-fit container'>
        <div>
          <p className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-[24px] text-center font-semibold'>Stay In Touch</p>
          <p className='text-white text-[40px] text-center font-semibold max-xl:text-[30px]'>Let's Bring Your Vision To Life</p>
        </div>

        {/* Contact Section */}
        <div

          className='pt-20 container flex justify-center px-0 '>
          <form onSubmit={handleSubmit} className='bg-white w-[600px] p-4 rounded-md flex flex-col gap-4'>
            <div className='flex gap-4'>
              <input name='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='First Name' className='bg-transparent form-control text-black' />
              <input name='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Last Name' className='bg-transparent form-control text-black' />
            </div>
            <div className='flex flex-col gap-4'>
              <input name='email' onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email Address' className='bg-transparent form-control text-black' />
              <input name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type='text' placeholder='Phone Number' className='bg-transparent form-control text-black' />
            </div>
            <div className='flex gap-4'>
              <textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder='How can I help you? ' className='bg-transparent form-control text-black h-[150px] resize-none' />
            </div>
            <button className='bg-primary py-2 text-white font-semibold rounded-md'>Send Message <FontAwesomeIcon className='rotate-45' icon={faPaperPlane} /></button>
          </form>
        </div>

        {/* Contact Section */}







        <div className='container py-40'>
          <div className='bg-gradient-to-r from-primary-dark via-white to-primary-dark h-[1px]'></div>
        </div>




        {/* Footer Section*/}
        <div className='pt-20 bg-primaryCardColor py-40 px-10 flex container w-full justify-around max-xl:flex-col-reverse max-xl:items-center max-xl:text-center max-xl:gap-8'>
          {/* Contact Information Container */}

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
                <a href='#' className='text-white text-[12px] pt-2'>Home</a>
                <a href='#' className='text-white text-[12px]'>Services</a>
                <a href='#' className='text-white text-[12px]'>FAQ</a>
                <a href='#' className='text-white text-[12px]'>About</a>
              </div>

            </div>
          </div>

          {/* Links Section */}
          <div>
          </div>



        </div>
        {/* Contact Form */}
      </div>


      {/* Footer Section */}

      <footer className='text-white text-[12px] text-center py-2 container'>© 2026 Above LogiX LLC</footer>
    </div >
  );
}

export default App;
