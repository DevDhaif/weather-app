import React, { useEffect } from 'react'

export const Background = ({vidUrl}) => {
    
  return (
    <video
        autoPlay
        loop
        muted
        className="absolute  top-0 -z-10 opacity-90 left-0 w-full object-cover h-full"
      >
        <source src={vidUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  )
}
