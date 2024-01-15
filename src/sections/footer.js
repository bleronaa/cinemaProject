import React from 'react';
import data from './data.json';
import {FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa";
import './footer.css';

const Footer = () => {

    const {homeData} = data;

    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>Our Company</h4>
                        <a href="#">
                            <p>Around Us</p>
                        </a>
                        <a href="#">
                            <p>General company data</p>
                        </a>
                        <a href="#">
                            <p>General business conditions</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>

                        <h4>Premium Experience</h4>
                        <a href="#">
                            <p>UltraAVX</p>
                        </a>
                        <a href="#">
                            <p>D-BOX</p>
                        </a>
                        <a href="#">
                            <p>IMAX</p>
                        </a>
                        <a href="#">
                            <p>VIP</p>
                        </a>
                        <a href="#">
                            <p>4DX</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Movies</h4>
                        <a href='#'>
                            <p>Albanian</p>
                        </a>
                        <a href='#'>
                            <p>Action</p>
                        </a>
                        <a href='#'>
                            <p>Thriller</p>
                        </a>
                        <a href='#'>
                            <p>Romance</p>
                        </a>
                        <a href='#'>
                            <p>Drama</p>
                        </a>
                        <a href='#'>
                            <p>Music</p>
                        </a>
                    </div>

                    <div className='sb_footer-links-div'>
                        <h4>Contact Us On</h4>
                        <div className='socialmedia'>
                            <a href="https://www.instagram.com/bleronatmava_/" target="_blank"><FaInstagram/></a>
                            <a href="https://www.facebook.com/blerona.tmava.35/" target="_blank"><FaFacebook/></a>
                            <a href="https://www.linkedin.com/in/blerona-tmava-b0b4b9250/" target="_blank"><FaLinkedin/></a>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()}
                            Cinemas.All right reserved.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
