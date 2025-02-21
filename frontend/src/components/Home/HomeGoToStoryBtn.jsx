import '../../assets/css/home.css';
import { useState, useEffect } from 'react';

const HomeGoToStoryBtn = () =>{
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <a style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease-out, transform 0.6s ease-out",
        }}><button className="homeGoToStoryBtn">이야기 작성하기</button></a>
    )
}

export default HomeGoToStoryBtn;