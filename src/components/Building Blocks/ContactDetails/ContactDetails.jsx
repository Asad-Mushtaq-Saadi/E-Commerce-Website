import React, { useContext, useState } from 'react';
import Styles from './ContactDetails.module.css';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import {ContactDetailsContext} from '../../../context/ContactDetailsContext'

const ContactDetails = () => {

    const {contactDetails} = useContext(ContactDetailsContext)

    return (
        <div className={Styles.contactDetails}>
            <div className={Styles.contactDetailsContent}>

                <p>
                    <IoIosMail className={`${Styles.icons} ${Styles.mail}`} />
                    &nbsp; {contactDetails.email}
                </p>

                <p>
                    <FaPhoneAlt className={`${Styles.icons} ${Styles.phone}`} />
                    &nbsp; {contactDetails.phone}
                </p>

            </div>
        </div>
    );
};

export default ContactDetails;