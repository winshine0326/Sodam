import '../../assets/css/reading.css';

const NovelContainer = ({ novel }) =>{
    // console.log(novel);
    const novelText = novel.content;
    const pdfTitle = novel.filename;
    
    return(
        <div className='novelMainContainer'>
            <h1>{pdfTitle}</h1>
            <h3 className='novelText'>{novelText}</h3>
        </div>
    )
}

export default NovelContainer;