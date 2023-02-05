import React, { useState, useEffect } from 'react';
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


        <div>

            <div className="scrollTop" onClick={scrollTop} style={{fontSize:30, color: 'white',  height: 40, display: 'flex',alignItems: 'center', justifycontent: 'center', cursor: 'pointer',}} >
                BACK TO TOP
            </div>
        </div>


    );
}

export default GoToTop;
