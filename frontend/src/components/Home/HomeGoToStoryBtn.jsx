import '../../assets/css/home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeGoToStoryBtn = () =>{
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <Link to='/upload'>
            <button className="homeGoToStoryBtn" style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}>이야기 작성하기</button>
        </Link>
    )
}

export default HomeGoToStoryBtn;