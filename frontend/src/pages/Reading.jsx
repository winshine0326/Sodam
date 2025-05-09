import Loading from '../components/Reading/Loading';
import '../assets/css/reading.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NovelContainer from '../components/Reading/NovelContainer';

const Reading = ()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [novel, setNovel] = useState({"filename":null,"content":null});

    const location = useLocation();
    const file = location.state?.file;

    const uploadFile = async () =>{
        setIsLoading(true);
        console.log(file);
        const formData = new FormData();
        formData.append("file",file);

        try{
            const response = await axios.post("http://localhost:8000/upload/", formData, {
                headers: { "Content-Type": "multipart/form-data" }, 
            })
            console.log(response);
            setNovel(response.data);
            setIsLoading(false);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(()=>{
        uploadFile();
    },[]);
    
    return(
        <>
        {isLoading ? <Loading/> : <NovelContainer novel={novel} />}
        </>
    )
}

export default Reading;