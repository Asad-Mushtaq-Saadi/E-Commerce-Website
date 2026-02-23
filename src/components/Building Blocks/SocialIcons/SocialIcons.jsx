import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import Styles from './SocialIcons.module.css'

const SocialIcons = () => {
    return (
        <div className={Styles.socialIconsParent}>
            
            <FaFacebookF className={Styles.socialIcon}/>
            <FaInstagram className={Styles.socialIcon}/>
            <FaTiktok className={Styles.socialIcon}/>
            <FaYoutube className={Styles.socialIcon}/>
            <FaLinkedinIn className={Styles.socialIcon}/>
            <FaXTwitter className={Styles.socialIcon}/>
            <FaWhatsapp className={Styles.socialIcon}/>
        </div>
    )
}

export default SocialIcons
