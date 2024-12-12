
import { useState, useEffect } from 'react';


const useWindowSize = () => {
    const [screenSize, setScreenSize] = useState('')
  
    useEffect(() => {
        function handleResize() {
          const screenWidth = window.innerWidth;
          // if (screenWidth < 420) {
          //   setScreenSize('sm')
          // } else if (screenWidth < 600) {
          //   setScreenSize('md')
          // } else if (screenWidth < 880) {
          //   setScreenSize('lg')
          // } else {
          //   setScreenSize('xl')
          // }
          if (screenWidth <= 620) {
            setScreenSize('sm')
          } else if (screenWidth < 880) {
            setScreenSize('md')
          } else{
            setScreenSize('lg')
          } 
        }
    
        handleResize(); // 컴포넌트 마운트 시 초기 크기 설정
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
  
    return screenSize;
};

export default useWindowSize;