import React from 'react';
import '../assets/css/home.css';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <main className='homeMain'>
                    <div className='homeMainEffect'>
                        <nav className='homeNav'>
                            <div class="homeNavLogo">
                                <a href="">Sodam</a>
                            </div>
                            <ul class="homeNavMenu">
                                <li><a href="">Home</a></li>
                                <li><a href="">Create Stories</a></li>
                                <li>|</li>
                                <li><a href="">Notion</a></li>
                                <li><a href="">Github</a></li>
                            </ul>
                        </nav>
                        <h1>main</h1>
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        </>
    )
}

export default Home;