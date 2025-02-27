import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Upload from './pages/Upload';
import Home from './pages/Home';
import Reading from './pages/Reading';

const Router = ()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/upload' element={<Upload/>}/>
                <Route path='/reading' element={<Reading/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;