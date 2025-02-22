import '../../assets/css/upload.css';
import sodamLogo from '../../assets/images/sodamLogo.png';
import { useState } from 'react';

const WaveContainer = () => {
    const [file, setFile] = useState();

    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    return (
        <>
            <div className="wave-container">
                <input type="file" id="file-input" accept=".pdf" multiple onChange={handleFile} />
                <label htmlFor="file-input" className="upload-label"><img src={sodamLogo} /></label>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            {file && (
                    <div className='selectedFile'>
                        <p>선택된 파일: {file.name}</p>
                        {/* <button onClick={handleSubmit}>제출</button> */}
                    </div>
            )}
        </>
    )
}

export default WaveContainer;