import '../../assets/css/upload.css';
import sodamLogo from '../../assets/images/sodamLogo.png';
import { useState } from 'react';
import UploadButtonBefore from './UploadButtonBefore.jsx';

const UploadContainer = () => {
    const [file, setFile] = useState();

    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    return (
        <>
            <UploadButtonBefore/>
            {file && (
                    <div className='selectedFile'>
                        <p>선택된 파일: {file.name}</p>
                    </div>
            )}
            {/* {file && (
                <button className='submitFile'>제출</button>
            )} */}
        </>
    )
}

export default UploadContainer;