import '../../assets/css/upload.css';
import sodamLogo from '../../assets/images/sodamLogo.png';
import { useEffect } from 'react';


const UploadButtonAfter = ({ props })=>{
    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }
    return (
        <div className="wave-container">
                <input type="file" id="file-input" accept=".pdf" multiple onChange={handleFile} />
                <label htmlFor="file-input" className="upload-labelA"><img src={sodamLogo} /></label>
                <div className="circleA"></div>
                <div className="circleA"></div>
                <div className="circleA"></div>
        </div>
    )
}

export default UploadButtonAfter;