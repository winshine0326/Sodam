import React from 'react';
import '../assets/css/home.css';
import Navbar from '../components/Global/Navbar.jsx';
import HomeTitleBox from '../components/Home/HomeTitleBox.jsx';
import HomeGoToStoryBtn from '../components/Home/HomeGoToStoryBtn.jsx';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <main className='homeMain'>
                    <div className='homeMainEffect'>
                    </div>
                    <Navbar />
                    <HomeTitleBox />
                    <HomeGoToStoryBtn />
                </main>
                <footer>

                </footer>
            </div>
        </>
    )
}

export default Home;