import React, { useEffect } from 'react'

export const Background = ({backgroundVideo}) => {
    {/**
        let vidUrl=`{/videos/${bgv}.mp4}`;
        useEffect(()=>{
        vidUrl=`{/videos/${bgv}.mp4}`;
    },[bgv])
  return (
    <video
        autoPlay
        loop
        muted
        className="absolute  top-0 -z-10 opacity-90 left-0 w-full object-cover h-full filter blur-sm"
        >
        <source src={vidUrl} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        )
    */}
    return(

        <video 
        id="myvid"
        autoPlay
        loop
        muted
        src={`/videos/${backgroundVideo}.mp4`}
        className="absolute  top-0 -z-10 opacity-90 left-0 w-full object-cover h-full filter blur-sm"
      >
        
        Your browser does not support the video tag.
      </video>
      )
}
