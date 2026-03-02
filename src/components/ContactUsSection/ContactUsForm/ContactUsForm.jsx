import React from "react";
import styles from "./ContactUsForm.module.css";
import Container from "../../Building Blocks/Container/Container";

const ContactUsForm = () => {
    return (
        <div className={styles.contactFormParent}>
            <Container>
                <div className={styles.contactFormContent}>
                    <h2 className={styles.heading}>Enquire Now</h2>
                    <p className={styles.subHeading}>
                        Feel free to ask anything, we are here to assist you.
                    </p>

                    <form className={styles.form}>
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
                                <label>Phone Number</label>
                                <select>
                                    <option>Pakistan +92</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label style={{ visibility: "hidden" }} >
                                    Phone
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
            </Container>
        </div>
    );
};

export default ContactUsForm;