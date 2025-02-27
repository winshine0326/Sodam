import Loading from '../components/Reading/Loading';
import '../assets/css/reading.css';
import { useState } from 'react';

const Reading = ({ file })=>{
    const [isLoading,setIsLoading] = useState(true);
    
    return(
        <>
        <Loading/>
        </>
    )
}

export default Reading;