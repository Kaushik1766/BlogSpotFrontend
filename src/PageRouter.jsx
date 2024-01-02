import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App.jsx';
import Create from './pages/Create.jsx';
import NotFound from './pages/NotFound.jsx';
import Edit from './pages/Edit.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { CookiesProvider } from 'react-cookie';
import Pricing from './pages/Pricing.jsx';

export default function PageRouter() {
    return (
        <CookiesProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </HashRouter>
            {/* <BrowserRouter basename='/BlogSpotFrontend'>
                <Routes>
                    <Route index element={<App />} />
                    <Route path='/home' element={<App />} />
                    <Route path='/create' element={<Create />} />
                    
                </Routes>
            </BrowserRouter> */}
        </CookiesProvider>
    );
}