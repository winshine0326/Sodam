import React from 'react';
import '../assets/css/home.css';
import HomeNav from '../components/Home/HomeNav.jsx';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <main className='homeMain'>
                    <div className='homeMainEffect'>
                        <HomeNav/>
                        <article className='homeTitleBox'>
                            <h1>소설 속에 담긴 지식, <br />배움의 조각이 이야기가 되다 - 소담</h1>
                            <span>개념 정리용 PDF를 바탕으로 판타지 소설을 생성하는 AI 서비스.<br/>
                                배움을 이야기로 풀어내어, 지식을 더 쉽게 이해하고 즐길 수 있도록 돕습니다.</span>
                        </article>
                        <a><button className="homeGoToStoryBtn">이야기 작성하기</button></a>
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        </>
    )
}

export default Home;