import React, { useState, useEffect } from 'react'
import Styles from './EmailSignupSection.module.css'
import SectionHeading from '../Building Blocks/SectionHeadings/SmallHeading'
import RoundedButton from '../Building Blocks/Buttons/RoundedButton'
import SectionGap from '../Building Blocks/SectionGap/SectionGap'
import Container from '../Building Blocks/Container/Container'

const EmailSignupSection = () => {
    const [email, setEmail] = useState('')
    const [subscribers, setSubscribers] = useState([])

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('subscribers')
        if (stored) setSubscribers(JSON.parse(stored))
    }, [])

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('subscribers', JSON.stringify(subscribers))
    }, [subscribers])

    const handleSubscribe = () => {
        if (!email.trim()) return

        // Generate sequential ID based on current array length
        const newId = subscribers.length + 1   // IDs: 1, 2, 3, ...
        setSubscribers(prev => [...prev, { id: newId, email: email.trim() }])

        setEmail('')
    }

    return (
        <>
            <Container>
                <div className={Styles.emailSignupSection}>
                    <div className={Styles.emailSignupSectionContent}>
                        <div className={Styles.emailSignupTitle}>
                            <SectionHeading subHeading="SUBSCRIBE" heading="Sign Up Our News Letter" />
                        </div>
                        <div className={Styles.signupEmail}>
                            <input
                                type="email"
                                className={Styles.emailInput}
                                placeholder="Enter Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <RoundedButton onClick={handleSubscribe}>Subscribe</RoundedButton>
                        </div>
                    </div>
                </div>
            </Container>
            <SectionGap />
        </>
    )
}

export default EmailSignupSection