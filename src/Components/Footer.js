import React from 'react'
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    return (
        <div>
            <div className='footerDiv'>
                <footer>
                    <hr className='FooterLine' />
                    <ul className='IconList'>
                        <div className='IconItem'>
                            <p > <EmailIcon />yashmitabansal@gmail.com</p>
                        </div>
                        <div className='IconItemList'>
                            <li className='IconItem'>
                                <NavLink to='/https://www.linkedin.com/in/yashmita-bansal-856a7a152/' className='Iconlink'>  <LinkedInIcon /></NavLink>
                            </li>
                            <li className='IconItem'>
                                <NavLink to='/About' className='Iconlink'>  <GitHubIcon /></NavLink>
                            </li>
                            <li className='IconItem'>
                                <NavLink to='/About' className='Iconlink'>    <InstagramIcon /></NavLink>
                            </li>
                        </div>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer;