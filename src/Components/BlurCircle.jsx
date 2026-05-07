import React from 'react'

const BlurCircle = ({ width, height, location }) => {
    return (
        <div className={`w-[${width}] h-[${height}] rounded-full bg-primary absolute blur-[200px] opacity-40 ${location} -z-1`}></div>

    )
}

export default BlurCircle