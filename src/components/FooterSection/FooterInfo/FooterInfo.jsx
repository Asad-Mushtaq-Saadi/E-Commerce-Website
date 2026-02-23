import React, {useContext} from 'react'
import Logo from '../../Building Blocks/Logo/Logo'
import Styles from './FooterInfo.module.css'
import SocialIcons from '../../Building Blocks/SocialIcons/SocialIcons'
import {LogoContext} from '../../../context/LogoContext'
import FooterContactDetails from '../FooterContactDetails/FooterContactDetails'


const FooterInfo = () => {

    const {logo} = useContext(LogoContext)
  

  return (
    <div className={Styles.footerInfoContent}>
      <Logo />

      <p>
       {logo.description}
      </p>

      <FooterContactDetails />

      <SocialIcons className={Styles.footerIconStyling} />
    </div>
  )
}

export default FooterInfo
