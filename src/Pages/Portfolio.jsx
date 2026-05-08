import React from 'react'

const Portfolio = () => {
    return (
        <div className='container h-[70vh]'>
            <div className='text-center'>
                <p className='text-white text-[30px] font-semibold'>Our Work</p>
                <p className='text-white'>Explore recent projects crafted with performance, scalability, and clean UI in mind.</p>
            </div>
            <div className='pt-20 max-w-[700px] mx-auto'>
                <div className='flex px-4 '>
                    <p className='text-white flex-grow-1 text-[20px]'>Sort Projects By</p>
                    <select className='form-select max-w-[500px] max-sm:w-[200px] '>
                        <option value="">All Industrials</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Portfolio