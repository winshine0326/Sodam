import React from 'react'
import Navbar from '../components/Global/Navbar.jsx';

const Upload = () => {
    return (
        <>
        <Navbar/>
            <header>
                <h1>소담</h1>
            </header>
            <div id='container'>
                <input type='file' />
                <p>여기에 답변 출력</p>
                <div id='textContainer'>
                </div>
            </div>
        </>
    )
}

export default Upload;