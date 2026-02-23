import React, { useState } from 'react';
import Styles from './ContactDetails.module.css';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const ContactDetails = () => {

    const [contactDetail] = useState({
        email: "example@gmail.com",
        phone: "+92-300-1234567"
    });

    return (
        <div className={Styles.contactDetails}>
            <div className={Styles.contactDetailsContent}>
                {Object.entries(contactDetail).map(([key, value]) => (
                    <p key={key}>
                        {key === "email" 
                            ? <IoIosMail className={`${Styles.icons} ${Styles.mail}`} />
                            : <FaPhoneAlt className={`${Styles.icons} ${Styles.phone}`} />
                        }
                        &nbsp; {value}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ContactDetails;