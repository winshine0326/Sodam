import '../../assets/css/upload.css';
import { useState } from 'react';
import UploadButtonBefore from './UploadButtonBefore.jsx';
import UploadButtonAfter from './UploadButtonAfter.jsx';

const UploadContainer = () => {
    const [file, setFile] = useState();

    const propsFunc = (data) => {
        setFile(data);
      };

    return (
        <>
            {file ? <UploadButtonAfter/> : <UploadButtonBefore props={propsFunc} />}
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