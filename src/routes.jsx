import {Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Apartment from './pages/Apartment/Apartment';
import About from './pages/About/About';
import ErrorPage from "./pages/Error/Error";

function RoutesList()
{
    return(

        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/apartment/:id' element={<Apartment />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<ErrorPage />} /> 
        </Routes>
        
    )
}

export default RoutesList