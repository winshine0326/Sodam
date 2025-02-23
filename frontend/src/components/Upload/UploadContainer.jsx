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
            {file ? <UploadButtonAfter file={file}/> : <UploadButtonBefore props={propsFunc} />}
            {file && (
                    <div className='selectedFile'>
                        <p>선택된 파일: {file.name}</p>
                    </div>
            )}
            <div className='textBox'>
                {file ? <h1 className='accent'>가운데 버튼을 클릭하여 소설 작성</h1>:<h1>가운데 버튼을 클릭하여 파일 업로드</h1>}
            </div>
        </>
    )
}

export default UploadContainer;