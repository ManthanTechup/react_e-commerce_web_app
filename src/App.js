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

function App() {

  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <Login /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/product/:productId', element: <ProtectedRoutes component={ProductDetailsPage} /> },
    { path: '/cart', element: <ProtectedRoutes component={CartPage} /> },

  ];

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* unmatched URLs */}
          <Route path="*" element={<Navigate to="/" />} />
          {routes && routes.map((route, k) => (

            <Route key={k} exact {...route} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
