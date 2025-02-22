import '../../assets/css/navbar.css';
import notionIcon from '../../assets/images/notionIcon.png';
import githubIcon from '../../assets/images/githubIcon.svg';
import { Link } from 'react-router-dom';
import sodamLogo from '../../assets/images/sodamLogo.png';

const HomeNav = () => {
    return (
        <nav className='nav'>
            <div className="navLogo">
                <img src={sodamLogo}/>
                <a href="">소담</a>
            </div>
            <ul className="navMenu">
                <li><Link to='/'>홈</Link></li>
                <li><Link to='/upload'>이야기 쓰기</Link></li>
                <li>|</li>
                <a href="https://tested-arrow-f94.notion.site/Sodam-196b7a0a13588054bcb0c7f83d5341da?pvs=4"><li><img src={notionIcon} /></li></a>
                <a href="https://github.com/winshine0326/Sodam"><li><img src={githubIcon} /></li></a>
            </ul>
        </nav>
    )
}

export default HomeNav;