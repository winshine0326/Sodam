import '../../assets/css/reading.css';

const NovelContainer = ({ novel }) =>{
    const goBack = ()=>{
        history.back();
    }


    // console.log(novel);
    const novelText = novel.content;
    const pdfTitle = novel.filename;
    
    return(
        <div className='novelMainContainer'>
            <div>
                <h1>{pdfTitle}</h1>
                <h3 className='novelText'>{novelText}</h3>
            </div>
            <button className='backBtn' onClick={goBack}>돌아가기</button>
        </div>
    )
}

export default NovelContainer;