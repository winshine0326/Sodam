import React from 'react'
import Navbar from '../components/Global/Navbar.jsx';
import '../assets/css/upload.css';
import WaveContainer from '../components/Upload/WaveContainer.jsx';

const Upload = () => {
    return (
        <>
            <Navbar />  
            <WaveContainer/>
            <div className='textBox'>
                <h1>가운데 버튼을 클릭하여 파일 업로드</h1>
            </div>
        </>
    )
}

export default Upload;