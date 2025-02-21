import React from 'react';
import '../assets/css/home.css';
import HomeNav from '../components/Home/HomeNav.jsx';
import HomeTitleBox from '../components/Home/HomeTitleBox.jsx';
import HomeGoToStoryBtn from '../components/Home/HomeGoToStoryBtn.jsx';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <main className='homeMain'>
                    <div className='homeMainEffect'>
                    </div>
                        <HomeNav/>
                        <HomeTitleBox/>
                        <HomeGoToStoryBtn/>
                </main>
                <footer>

                </footer>
            </div>
        </>
    )
}

export default Home;