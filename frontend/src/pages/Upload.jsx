import React from 'react'
import Navbar from '../components/Global/Navbar.jsx';
import '../assets/css/upload.css';
import sodamLogo from '../assets/images/sodamLogo.png';

const Upload = () => {
    return (
        <>
            <Navbar />  
            <div className="wave-container">
                <input type="file" id="file-input" />
                <label htmlFor="file-input" className="upload-label"><img src={sodamLogo}/></label>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

        </>
    )
}

export default Upload;