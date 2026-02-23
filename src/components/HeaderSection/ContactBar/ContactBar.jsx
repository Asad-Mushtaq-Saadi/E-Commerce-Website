import React from 'react'
import Styles from './ContactBar.module.css'
import Container from '../../Building Blocks/Container/Container'
import ContactDetails from '../../Building Blocks/ContactDetails/ContactDetails'
import SocialIcons from '../../Building Blocks/SocialIcons/SocialIcons'


const ContactBar = () => {
  return (
    <div className={Styles.contactBarParent}>
        <Container>
          <div className={Styles.contactBarContent}>
            <ContactDetails />
            <SocialIcons />
          </div>
        </Container>
    </div>
  )
}

export default ContactBar
