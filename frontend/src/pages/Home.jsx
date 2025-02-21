import React from 'react';
import '../assets/css/home.css';

const Home = ()=>{
    return(
       <>
       <div className='homeContainer'>
        <header>
            <nav>
                <span>Sodam</span>
                <a>Login</a>
                <a>Blog</a>
                <a>Github</a>
            </nav>
        </header>
        <main className='homeMain'>
            <div className='homeMainEffect'>
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