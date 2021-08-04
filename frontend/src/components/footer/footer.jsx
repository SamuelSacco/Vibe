import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return(
        <div className="footer">
            {/* <a href='https://www.linkedin.com/in/raphael-talatala-703943129/' >
                <i class="fab fa-linkedin-in footer-logo" ></i>
            </a> */}
            <div className='member-links'>
                <span>
                    Raphael Talatala
                </span>
                <a href='https://github.com/rgltalatala' >
                    <i className="fab fa-github footer-logo"></i>
                </a>
                <a href='https://www.linkedin.com/in/raphael-talatala-703943129/' >
                    <i class="fab fa-linkedin footer-logo  fa-5x"></i>
                </a>
                <a href='https://angel.co/u/raphael-talatala' >
                    <i class="fab fa-angellist footer-logo"></i>
                </a>
            </div>
            <div className='member-links'>
                <span>
                    Samuel Sacco
                </span>
                <a href='https://github.com/SamuelSacco' >
                    <i className="fab fa-github footer-logo"></i>
                </a>
                <a href='https://www.linkedin.com/in/sam-sacco-642a59218/' >
                    <i class="fab fa-linkedin footer-logo  fa-5x"></i>
                </a>
                <a href='https://angel.co/u/samuel-sacco' >
                    <i class="fab fa-angellist footer-logo"></i>
                </a>
            </div>
            <div className='member-links'>
                <span>
                    Paul Kim
                </span>
                <a href='https://github.com/pauulkim' >
                    <i className="fab fa-github footer-logo"></i>
                </a>
                <a href='https://www.linkedin.com/in/pauulkim/' >
                    <i class="fab fa-linkedin footer-logo  fa-5x"></i>
                </a>
                <a href='https://angel.co/u/paulkim36' >
                    <i class="fab fa-angellist footer-logo"></i>
                </a>
            </div>
            <div className='member-links'>
                <span>
                    Chase Van Haselen
                </span>
                <a href='https://github.com/cvhcvhcvh' >
                    <i className="fab fa-github footer-logo"></i>
                </a>
                <a href='https://www.linkedin.com/in/cvhcvh/' >
                    <i class="fab fa-linkedin footer-logo  fa-5x"></i>
                </a>
                <a href='https://angel.co/u/cvh' >
                    <i class="fab fa-angellist footer-logo"></i>
                </a>
            </div>
        </div>
    )
}