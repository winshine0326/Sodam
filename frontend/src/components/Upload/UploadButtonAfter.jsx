import '../../assets/css/upload.css';
import sodamLogo from '../../assets/images/sodamLogo.png';
import { useNavigate } from "react-router-dom";

const UploadButtonAfter = ({ file })=>{
    const navigate = useNavigate();

    const handleFile = (e) => {
        navigate("/reading", { state : { file } })
        e.preventDefault();
        e.stopPropagation();
        // console.log("hello")
    }
    return (
        <div className="wave-container">
                <input type="file" id="file-input" accept=".pdf" multiple style={{ display: 'none' }}/>
                <label htmlFor="file-input" className="upload-labelA" onClick={handleFile} ><img src={sodamLogo}/></label>
                <div className="circleA"></div>
                <div className="circleA"></div>
                <div className="circleA"></div>
        </div>
    )
}

export default UploadButtonAfter;