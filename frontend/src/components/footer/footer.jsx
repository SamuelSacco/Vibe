import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className="footer">
                {/* <a href='https://www.linkedin.com/in/raphael-talatala-703943129/' >
                    <i class="fab fa-linkedin-in footer-logo" ></i>
                </a> */}
                <div className='member-links'>
                    Raphael Talatala
                    <a href='https://github.com/rgltalatala' >
                        <i class="fab fa-github footer-logo"></i>
                    </a>
                </div>
                <div className='member-links'>
                    Sam Sacco
                    <a href='https://github.com/SamuelSacco' >
                        <i class="fab fa-github footer-logo"></i>
                    </a>
                </div>
                <div className='member-links'>
                    Paul Kim
                    <a href='https://github.com/pauulkim' >
                        <i class="fab fa-github footer-logo"></i>
                    </a>
                </div>
                <div className='member-links'>
                    Chase Van Haselen
                    <a href='https://github.com/cvhcvhcvh' >
                        <i class="fab fa-github footer-logo"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}