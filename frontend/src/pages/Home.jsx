import React from 'react';
import '../assets/css/home.css';
import notionIcon from '../assets/images/notionIcon.png';
import githubIcon from '../assets/images/githubIcon.svg';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <main className='homeMain'>
                    <div className='homeMainEffect'>
                        <nav className='homeNav'>
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
                        <article className='homeTitleBox'>
                            <h1>소설 속에 담긴 지식, <br />배움의 조각이 이야기가 되다 - 소담</h1>
                            <span>개념 정리용 PDF를 바탕으로 판타지 소설을 생성하는 AI 서비스.<br/>
                                배움을 이야기로 풀어내어, 지식을 더 쉽게 이해하고 즐길 수 있도록 돕습니다.</span>
                        </article>
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        </>
    )
}

export default Home;