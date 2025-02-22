import React from 'react'
import Navbar from '../components/Global/Navbar.jsx';
import '../assets/css/upload.css';
import WaveContainer from '../components/Upload/WaveContainer.jsx';

const Upload = () => {
    return (
        <>
            <Navbar />  
            <WaveContainer/>
        </>
    )
}

export default Upload;