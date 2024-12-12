import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const ImageSlider = () => {
  const data = [
    "https://th.bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg",
    "https://media.istockphoto.com/photos/dark-mountains-picture-id157502304?b=1&k=20&m=157502304&s=170667a&w=0&h=iYlQXr9ZnGNscM0fIwUJqchw1oajVItj2NieG64edVw=",
    "https://th.bing.com/th/id/OIP.0uENgXUhCegvfjpBnFxUcgHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center">
      {/* Left Button */}
      <div className="mr-[4vw] cursor-pointer" onClick={handleLeft}>
        <FaAngleLeft size={40} />
      </div>

      {/* Slider */}
      <div className="relative flex w-[20vw] overflow-hidden">
        <div
          className={`flex transition-transform duration-300`}
          style={{
            transform: `translateX(-${currentIndex * 20}vw)`,
          }}
        >
          {data.map((x, index) => (
            <img
              src={x}
              key={index}
              className="w-[20vw] h-[30vw] object-cover"
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Button */}
      <div className="ml-[4vw] cursor-pointer" onClick={handleRight}>
        <FaChevronRight size={40} />
      </div>
    </div>
  );
};

export default ImageSlider;
