import '../../assets/css/reading.css';
import lodingGirl from '../../assets/images/loadingGirl.png';

const Loading = ()=>{
    return(
        <>
        <div className="loadingContainer">
            <div className='loadingMain'>
                <img src={lodingGirl}/>
                <h1>열심히 소설을 작성 중입니다....</h1>
            </div>
        </div>
        </>
    )
}

export default Loading;