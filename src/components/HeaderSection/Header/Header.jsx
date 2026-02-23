import React from 'react'
import PromoBar from '../PromoBar/PromoBar'
import { PromoBarContentProvider } from '../../../context/promoContext'
import Logo from '../../Building Blocks/Logo/Logo'
import MainHeaderIcons from '../MainHeaderIcons/MainHeaderIcons'
import HeaderMainBar from '../HeaderMainBar/HeaderMainBar'
import SquareButton from '../../Building Blocks/Buttons/SquareButton'
import RoundedButton from '../../Building Blocks/Buttons/RoundedButton'
import Categories from '../../Building Blocks/Categories/Categories'
import CategoryBar from '../CategoryBar/CategoryBar.jsx'
import SocialIcons from '../../Building Blocks/SocialIcons/SocialIcons.jsx'
import ContactDetails from '../../Building Blocks/ContactDetails/ContactDetails.jsx'
import ContactBar from '../ContactBar/ContactBar.jsx'
import Styles from './Header.module.css'


const header = () => {
  return (
    <div className={Styles.header}>
      <PromoBarContentProvider>
      <PromoBar />
      </PromoBarContentProvider>
      <ContactBar />
      <HeaderMainBar />
      <CategoryBar />
      
    </div>
  )
}

export default header
