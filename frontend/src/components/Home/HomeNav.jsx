import '../../assets/css/home.css';
import notionIcon from '../../assets/images/notionIcon.png';
import githubIcon from '../../assets/images/githubIcon.svg';
import { useState, useEffect } from 'react';


const HomeNav = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className='homeNav' style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
        }}>
            <div class="homeNavLogo">
                <a href="">소담</a>
            </div>
            <ul class="homeNavMenu">
                <li><a href="">홈</a></li>
                <li><a href="">이야기 쓰기</a></li>
                <li>|</li>
                <a href="https://tested-arrow-f94.notion.site/Sodam-196b7a0a13588054bcb0c7f83d5341da?pvs=4"><li><img src={notionIcon} /></li></a>
                <a href="https://github.com/winshine0326/Sodam"><li><img src={githubIcon} /></li></a>
            </ul>
        </nav>
    )
}

export default HomeNav;