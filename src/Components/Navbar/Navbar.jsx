import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Navbar.css'
import logo from '../assets/images/Logo.png'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='py-lg-3'>
            <nav className="d-lg-none navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">
                        < img src={logo} alt="CORAL" className='logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <hr />
                        <ul className="navbar-nav">
                            <div className="nav-item mx-1 login">
                                <FontAwesomeIcon icon={faUser} className='mx-1' />
                                <Link className='text-decoration-none text-black' to={'/login'}> Login</Link>
                            </div>
                            <div className="nav-item mx-1 register">
                                <Link className='text-decoration-none text-black' to={'/sign-up'}>Register</Link>
                            </div>
                            <div className="nav-item mx-1 cart">
                                <FontAwesomeIcon icon={faBagShopping} className='mx-1' />
                                <Link className='text-decoration-none text-black' to={'/cart'}>Cart</Link>
                            </div>
                            <div className="nav-item mx-1 ">
                                <div className="search-bar d-flex justify-content-between rounded-pill">
                                    <input type="text" id='searchInput' placeholder='Search Product' />
                                    <div className="ml-1 icon search-icon">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav >

            <div className="container d-none d-lg-flex justify-content-between align-items-center">
                <div className="search my-1">
                    <div className="search-bar d-flex rounded-pill">
                        <input type="text" id='searchInput' placeholder='Search Product' />
                        <div className="ml-1 icon search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt="CORAL" />
                </div>
                <div className="cart-and-auth d-flex">
                    <div className="mx-2 d-flex align-items-center login">
                        <FontAwesomeIcon icon={faUser} className='me-2' />
                        <Link className='text-decoration-none text-black' to={'/login'}> Login</Link>
                    </div>
                    <div className="mx-2 d-flex align-items-center register">
                        <Link className='text-decoration-none text-black' to={'/sign-up'}>Register</Link>
                    </div>
                    <div className="mx-2 d-flex align-items-center cart">
                        <svg className='me-2' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" />
                            <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#0B0B0B" stroke-width="2" />
                        </svg>
                        <Link className='text-decoration-none text-black' to={'/cart'}>Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar