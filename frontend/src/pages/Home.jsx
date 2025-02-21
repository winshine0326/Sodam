import React from 'react';
import '../assets/css/home.css';
import HomeNav from '../components/Home/HomeNav.jsx';
import HomeTitleBox from '../components/Home/HomeTitleBox.jsx';
import HomeGoToStoryBtn from '../components/Home/HomeGoToStoryBtn.jsx';
import { useState, useEffect } from 'react';

const Home = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='homeContainer'>
                <main className='homeMain'>
                    <div className='homeMainEffect' style={{
                        opacity: visible ? 1 : 0,
                        transition: "opacity 0.6s ease-out"
                    }}>
                    </div>
                    <HomeNav />
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