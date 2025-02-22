import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Upload from './pages/Upload';
import Home from './pages/Home';

const Router = ()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/upload' element={<Upload/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;