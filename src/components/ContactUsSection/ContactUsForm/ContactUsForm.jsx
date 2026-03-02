import React from "react";
import styles from "./ContactUsForm.module.css";
import Container from "../../Building Blocks/Container/Container";
import SectionGap from "../../Building Blocks/SectionGap/SectionGap";

const ContactUsForm = () => {
    return (
        <div className={styles.contactFormParent}>
            <Container>
                <div className={styles.fromAndMap}>
                    <div className={styles.contactFormContent}>

                        <form className={styles.form}>
                        <h2 className={styles.heading}>Enquire Now</h2>
                        <p className={styles.subHeading}>
                            Feel free to ask anything, we are here to assist you.
                        </p>
                            {/* First & Last Name */}
                            <div className={`${styles.row} ${styles.nameRow}`}>
                                <div className={styles.inputGroup}>
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className={styles.inputGroup}>
                                <label>Email*</label>
                                <input type="email" />
                            </div>

                            {/* Phone */}
                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label>Country Coder</label>
                                    <select className={styles.countrySelect}>
                                        <option className={styles.desktopOption}>Pakistan +92</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label  >
                                        Phone Number
                                    </label>
                                    <input type="text" />
                                </div>
                            </div>

                            {/* Message */}
                            <div className={styles.inputGroup}>
                                <label>Message*</label>
                                <textarea rows="4"></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className={styles.mapContainer}>
                        <div className={styles.map}>
                            <h1>Our Location</h1>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.800116426721!2d72.34308487468004!3d30.443183974746727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393dff3e5d2e92c1%3A0x5f8b2bfb6a8e0b4!2sMian%20Channu!5e0!3m2!1sen!2s!4v1700000000000"
                                width="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUsForm;