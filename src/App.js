import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Toaster } from 'react-hot-toast';

import HomePage from './Components/Homepage/HomePage'
import CartPage from './Components/CartPage/CartPage'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import ProductDetailsPage from './Components/ProductDetailsPage/ProductDetailsPage'
import SignUp from './Components/SignUp/SignUp'
import ProtectedRoutes from './Components/common/ProtectedRoutes'
import { useEffect, useState } from 'react';

function App() {
  const currentUrl = window.location.pathname;
  const [isAuthPage, setIsAuthPage] = useState(false)
  useEffect(() => {
    let currPage = currentUrl.split('/').pop()
    console.log("curr", currPage)
    setIsAuthPage(currPage === "login" || currPage === "sign-up" ? false : true)
    return () => {
    };
  }, [currentUrl]);

  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <Login /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/product/:productId', element: <ProtectedRoutes Component={ProductDetailsPage} /> },
    { path: '/cart', element: <ProtectedRoutes Component={CartPage} /> },

  ];

  return (
    <div className='poppins-regular'>
      <Toaster
        toastOptions={{
          duration: 5000
        }} />
      <BrowserRouter>
        {isAuthPage && <Navbar />}
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          {routes && routes.map((route, k) => (
            <Route key={k} exact {...route} />
          ))}
        </Routes>
        {isAuthPage && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
