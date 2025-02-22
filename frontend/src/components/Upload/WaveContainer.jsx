import '../../assets/css/upload.css';
import sodamLogo from '../../assets/images/sodamLogo.png';

const WaveContainer = () => {
    return (
        <div className="wave-container">
            <input type="file" id="file-input" />
            <label htmlFor="file-input" className="upload-label"><img src={sodamLogo} /></label>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}

export default WaveContainer;