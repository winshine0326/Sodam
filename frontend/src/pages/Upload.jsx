import React from 'react'
const Upload = () => {
    return (
        <>
            <header>
                <h1>소담</h1>
            </header>
            <div id='container'>
                <input type='file' />
                <p>여기에 답변 출력</p>
                <div id='textContainer'>
                </div>
            </div>
        </>
    )
}

export default Upload;