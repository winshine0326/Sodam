import '../../assets/css/upload.css';
import sodamLogo from '../../assets/images/sodamLogo.png';


const UploadButtonBefore = ()=>{
    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }
    return (
        <div className="wave-container">
                <input type="file" id="file-input" accept=".pdf" multiple onChange={handleFile} />
                <label htmlFor="file-input" className="upload-labelB"><img src={sodamLogo} /></label>
                <div className="circleB"></div>
                <div className="circleB"></div>
                <div className="circleB"></div>
        </div>
    )
}

export default UploadButtonBefore;