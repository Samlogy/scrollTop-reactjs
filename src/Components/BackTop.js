import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './style.css';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
          <FaArrowUp className="scrollTop" onClick={scrollTop} 
              style={{ display: showScroll ? 'flex' : 'none'}} />
  );
}
// height: 40, 
export default ScrollTopArrow;