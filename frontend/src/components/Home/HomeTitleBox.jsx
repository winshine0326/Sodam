import '../../assets/css/home.css';
import { useState, useEffect } from 'react';

const HomeTitleBox = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setVisible1(true), 500);
        const timer2 = setTimeout(() => setVisible2(true), 1000);
        return () => {clearTimeout(timer1),clearTimeout(timer2)};
    }, []);

    return (
        <article className='homeTitleBox'>
            <h1 style={{
                opacity: visible1 ? 1 : 0,
                transform: visible1 ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 1s ease-out, transform 0.6s ease-out",
            }}>소설 속에 담긴 지식, <br />배움의 조각이 이야기가 되다 - 소담</h1>
            <span style={{
                opacity: visible2 ? 1 : 0,
                transform: visible2 ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 1s ease-out, transform 0.6s ease-out",
            }}>개념 정리용 PDF를 바탕으로 판타지 소설을 생성하는 AI 서비스.<br />
                배움을 이야기로 풀어내어, 지식을 더 쉽게 이해하고 즐길 수 있도록 돕습니다.</span>
        </article>
    )   
}

export default HomeTitleBox;