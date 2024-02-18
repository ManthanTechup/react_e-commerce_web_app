import React from 'react'
import './HomePage.css'
import model1 from '../assets/images/model1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="back-to-top" onClick={backToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <section className='homeContainer'>
                <div className="container">
                    <hr className='d-none d-md-block' />
                    <div className="row mt-2 row-cols-1 row-cols-md-2 landing-page-product">
                        <div className="col d-flex flex-column justify-content-center align-items-baseline">
                            <div className="my-4 header fs-1">Collections</div>
                            <div className="my-4 description">you can explore ans shop many differnt collection
                                from various barands here.</div>
                            <div className="my-4 d-flex align-items-center shop-btn p-2 px-3 fs-4 text-white cursor-pointer">
                                <svg className='me-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                                    <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#fff" stroke-width="2" />
                                </svg>
                                <span>SHOP NOW</span>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <div className="landing-page-image-outline"><img src={model1} className='landingPageImage' alt="model1" /></div>
                        </div>
                    </div>
                </div>

            </section>
        </ >
    )
}

export default HomePage