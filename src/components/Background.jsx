
export const Background = ({backgroundVideo}) => {

    return(

        <video 
        id="myvid"
        autoPlay
        loop
        
        src={`/videos/${backgroundVideo}.mp4`}
        className="absolute  top-0 -z-10 opacity-90 left-0 w-full object-cover h-full filter blur-sm"
      >
        
        Your browser does not support the video tag
      </video>
      )
}
