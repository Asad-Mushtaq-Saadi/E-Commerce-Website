import React, {useContext} from 'react'
import Logo from '../../Building Blocks/Logo/Logo'
import Styles from './FooterInfo.module.css'
import SocialIcons from '../../Building Blocks/SocialIcons/SocialIcons'
import {LogoContext} from '../../../context/LogoContext'
import ContactDetails from '../../Building Blocks/ContactDetails/ContactDetails'


const FooterInfo = () => {

    const {logo} = useContext(LogoContext)
  

  return (
    <div className={Styles.footerInfoContent}>
      <Logo />

      <p>
       {logo.description}
      </p>

      <ContactDetails />

      <SocialIcons className={Styles.footerIconStyling} />
    </div>
  )
}

export default FooterInfo
