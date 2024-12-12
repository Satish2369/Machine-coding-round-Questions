import React, { useEffect, useState } from 'react'

const ImageSlider2 = () => {
    const [activeImageIndex,setActiveImageIndex] = useState(0);

     useEffect(()=>{
      const timer=  setTimeout(()=>{
            handleRightCLick();
        },5000)
          

        return ()=>{
         clearTimeout(timer);
        }
     },[activeImageIndex])


    const data = [
        "https://th.bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg",
        "https://media.istockphoto.com/photos/dark-mountains-picture-id157502304?b=1&k=20&m=157502304&s=170667a&w=0&h=iYlQXr9ZnGNscM0fIwUJqchw1oajVItj2NieG64edVw=",
        "https://th.bing.com/th/id/OIP.0uENgXUhCegvfjpBnFxUcgHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",
      ];





         const handleRightCLick = ()=>{
            if(activeImageIndex+1> data.length-1){
                setActiveImageIndex(0)
             }
             else{
                setActiveImageIndex(activeImageIndex+1);
             }
         ;

         }
         const handleLeftCLick = ()=>{
             if(activeImageIndex-1===-1){
                setActiveImageIndex(data.length-1)
             }
             else{
                setActiveImageIndex(activeImageIndex-1);
             }
         

         }
  return (
    <div className='flex justify-center items-center bg-white'>
         <button className='font-bold m-10 p-4' onClick={handleLeftCLick}>Previous</button>

          {data.map((url,index)=>  
               <img src={url}
                key={index}
                 alt="wallpapers" 
                 className={'w-[500px] h-[400px] ' + (activeImageIndex===index ?"block": "hidden" )} 
                 /> )}


      <button className='font-bold m-10 p-4' onClick={handleRightCLick}>Next</button>



    </div>
  )
}

export default ImageSlider2
