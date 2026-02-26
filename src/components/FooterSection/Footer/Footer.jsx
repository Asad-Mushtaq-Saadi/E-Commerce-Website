import React from 'react'
import Styles from './Footer.module.css'
import Container from '../../Building Blocks/Container/Container'
import FooterInfo from '../FooterInfo/FooterInfo'
import FooterPages from '../FooterPages/FooterPages'
import FooterCategories from '../FooterCategories/FooterCategories'
import RightReservedBar from '../RightReservedBar/RightReservedBar'
import SectionGap from '../../Building Blocks/SectionGap/SectionGap'

const Footer = () => {
  return (
    <div className={Styles.footerParent}>
      <div className={Styles.footerTop}>
      <Container>
        <div className={Styles.footerContent}>
          <FooterInfo />
          <FooterPages />
          <FooterCategories />
          
          
        </div>
      </Container>
      </div>
      <div className={Styles.footerBottom}>
      <Container>
        <RightReservedBar />
      </Container>
      </div>
      <SectionGap />
      
    </div>
  )
}

export default Footer
