import React, { useState, useEffect} from 'react'
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>
    {
        window.addEventListener("scroll", () => {
            if(window.scrollY>100)
            {
                handleShow(true);
                
            }
            else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll",null);
        };
    },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav_logo'
        src='https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
        alt="Netflixlogo"/>

    </div>
  )
}

export default Nav