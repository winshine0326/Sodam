import React from 'react';
import '../assets/css/home.css';
import HomeNav from '../components/Home/HomeNav.jsx';
import HomeTitleBox from '../components/Home/HomeTitleBox.jsx';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <main className='homeMain'>
                    <div className='homeMainEffect'>
                        <HomeNav/>
                        <HomeTitleBox/>
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