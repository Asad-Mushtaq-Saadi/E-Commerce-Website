import React from 'react'
import Styles from './EmailSignupSection.module.css'
import SectionHeading from '../Building Blocks/SectionHeadings/SmallHeading'
import RoundedButton from '../Building Blocks/Buttons/RoundedButton'
import SectionGap from '../Building Blocks/SectionGap/SectionGap'
import Container from '../Building Blocks/Container/Container'
import InputStyles from '../Building Blocks/SearchBar/SearchBar.module.css'



const EmailSignupSection = () => {
    return (
        <>
         <Container>
            <div className={Styles.emailSignupSection} >
                <div className={Styles.emailSignupSectionContent}>
                    <div className={Styles.emailSignupTitle}>
                        {/* <SmallSectionHeading />  */}
                        <SectionHeading subHeading="SUBSCRIBE" heading="Sign Up Our News Letter" className={Styles.emailHeading} />
                    </div>
                    <div className={Styles.signupEmail}>
                        <input type="text" className={Styles.emailInput} placeholder='Enter Email'/>
                        <RoundedButton>Subscribe</RoundedButton>
                    </div>
                </div>

            </div>
            </Container>
            <SectionGap />
        </>
    )
}

export default EmailSignupSection
