import React, { useState, useEffect } from "react";
import styles from "./ContactUsForm.module.css";
import Container from "../../Building Blocks/Container/Container";
import SectionGap from "../../Building Blocks/SectionGap/SectionGap";

const ContactUsForm = () => {
    // Form field states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [countryCode, setCountryCode] = useState("+92");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    // Error states
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    // Submissions array
    const [submissions, setSubmissions] = useState([]);

    // Load existing submissions from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("contactSubmissions");
        if (stored) setSubmissions(JSON.parse(stored));
    }, []);

    // Save submissions to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    }, [submissions]);

    // Validate form
    const validate = () => {
        const newErrors = {};

        if (!firstName.trim()) newErrors.firstName = "First name is required";
        if (!lastName.trim()) newErrors.lastName = "Last name is required";

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (!/^\d+$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Phone number must contain only digits";
        }

        if (!message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const newSubmission = {
            id: Date.now(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            countryCode,
            phoneNumber: phoneNumber.trim(),
            message: message.trim(),
            submittedAt: new Date().toISOString(),
        };

        setSubmissions(prev => [...prev, newSubmission]);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setCountryCode("+92"); 

        setSuccess("Your message has been sent successfully!");
        setTimeout(() => setSuccess(""), 5000);
    };

    return (
        <div className={styles.contactFormParent}>
            <Container>
                <div className={styles.fromAndMap}>
                    <div className={styles.contactFormContent}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <h2 className={styles.heading}>Enquire Now</h2>
                            <p className={styles.subHeading}>
                                Feel free to ask anything, we are here to assist you.
                            </p>

                            {/* First & Last Name */}
                            <div className={`${styles.row} ${styles.nameRow}`}>
                                <div className={styles.inputGroup}>
                                    <label>First Name *</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Last Name *</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                                </div>
                            </div>

                            {/* Email */}
                            <div className={styles.inputGroup}>
                                <label>Email *</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span className={styles.error}>{errors.email}</span>}
                            </div>

                            {/* Phone */}
                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label>Country Code *</label>
                                    <select
                                        className={styles.countrySelect}
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                    >
                                        <option className={styles.desktopOption}>Pakistan +92</option>
                                        <option>USA +1</option>
                                        <option>UK +44</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Phone Number *</label>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
                                </div>
                            </div>

                            {/* Message */}
                            <div className={styles.inputGroup}>
                                <label>Message *</label>
                                <textarea
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                {errors.message && <span className={styles.error}>{errors.message}</span>}
                            </div>

                            {success && <p className={styles.success}>{success}</p>}

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