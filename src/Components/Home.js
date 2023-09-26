import React from 'react'
import './Home.css';
import Web from "../Images/Programming-amico.svg"
import { NavLink } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Home = () => {
    return (
        <div>

            <section id='Header' >
                <div className=' container-fluid'>
                    <div>
                        <div className='col-10 mx-auto homeContent  '>
                            <div className='col-md-6 pt-5  TextHeader '>
                                <h1>Hi, I'am Yashmita Bansal</h1>
                                <div className="container">
                                    
                                    <span className=" text SecText "> Front-End Developer </span>
                                </div>

                                <div className="mt-3 ">
                                    <NavLink to='/About' className='btn homeBtn'>About Me</NavLink>
                                </div>

                                <div className='IconItemList'>
                                    <ul className='IconList'>
                                        <li className='IconItem'>
                                            <a href="https://www.linkedin.com/in/yashmita-bansal-856a7a152/" target="_blank" className='Iconlink'>
                                                <LinkedInIcon />
                                            </a>
                                        </li>
                                        <li className='IconItem'>
                                            <a href="https://github.com/yashmitabansal" target="_blank" className='Iconlink'>
                                                <GitHubIcon />
                                            </a>
                                        </li>
                                        <li className='IconItem'>
                                            <a href="https://www.instagram.com/yassu_agarwal_14/" target="_blank" className='Iconlink'>
                                                <InstagramIcon />
                                            </a>
                                        </li>
                                        <li className='IconItem'>
                                            <a href="https://web.tel.onl/" target="_blank" className='Iconlink'>
                                                <TelegramIcon />
                                            </a>
                                        </li>
                                        <li className='IconItem'>
                                        <a href="https://twitter.com/home" target="_blank" className='Iconlink'>
                                            <TwitterIcon />
                                        </a>
                                    </li>




                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-6  header-img  '>

                                <img src={Web} className="imgAnimation " id="" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Home;