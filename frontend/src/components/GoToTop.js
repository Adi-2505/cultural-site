import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import '../App.css';


const GoToTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
        }
    })

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (


        <div className="grid grid-flow-row auto-rows-max">
        <div>

            <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ color: 'red', height: 40, display: showScroll ? 'flex' : 'none' }} />
        </div>
        </div>


    );
}

export default GoToTop;
