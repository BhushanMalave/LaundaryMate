import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import "./AnimationImg.css";
import img1 from "../../images/Animation_img1.png";
import img2 from "../../images/Animation_img2.png";
import img3 from "../../images/Animation_img3.png";
import img4 from "../../images/Animation_img4.png";

const images = [img1, img2, img3, img4];
export default function AnimationImg() {
  // const [bg, setBg] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const duration = 500;
  const defaultStyle = {
    transition: `opacity ${duration}ms`,
    opacity: 0,
    position: "absolute",
  };
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div className="animation-images">
      {images.map((image, index) => (
        <Transition
          key={image}
          in={activeIndex === index}
          timeout={duration}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            />
          )}
        </Transition>
      ))}

      {/* <img className="animation-images" src={bg} /> */}
    </div>
  );
}
