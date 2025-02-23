import '../../assets/css/upload.css';
import sodamLogo from '../../assets/images/sodamLogo.png';


const UploadButtonAfter = ()=>{
    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }
    return (
        <div className="wave-containerA">
                <input type="file" id="file-input" accept=".pdf" multiple onChange={handleFile} />
                <label htmlFor="file-input" className="upload-labelA"><img src={sodamLogo} /></label>
                <div className="circleA"></div>
                <div className="circleA"></div>
                <div className="circleA"></div>
        </div>
    )
}

export default UploadButtonAfter;