import PromoBar from '../PromoBar/PromoBar'
import { PromoBarContentProvider } from '../../../context/promoContext'
import HeaderMainBar from '../HeaderMainBar/HeaderMainBar'
import CategoryBar from '../CategoryBar/CategoryBar.jsx'
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
