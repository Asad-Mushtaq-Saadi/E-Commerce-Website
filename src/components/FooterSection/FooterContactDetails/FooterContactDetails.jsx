import React, { useContext } from 'react'
import Styles from './FooterContactDetails.module.css'
import { IoIosMail } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"
import { ContactDetailsContext } from '../../../context/ContactDetailsContext'

const FooterContactDetails = () => {

  const { contactDetails } = useContext(ContactDetailsContext)

  return (
    <div className={Styles.fContactDetailsContent}>

      <p>
        <IoIosMail className={Styles.fMail} />
        &nbsp; {contactDetails.email}
      </p>

      <p>
        <FaPhoneAlt className={Styles.fPhone} />
        &nbsp; {contactDetails.phone}
      </p>

    </div>
  )
}

export default FooterContactDetails