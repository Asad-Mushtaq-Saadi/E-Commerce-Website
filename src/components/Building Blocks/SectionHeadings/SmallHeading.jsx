import React from 'react'
import Styles from './SectionHeadings.module.css'
import Container from '../../Building Blocks/Container/Container'

const SectionHeading = ({ subHeading, heading }) => {
    return (
        <div className={Styles.sHParent}>
            <Container>
                <div className={Styles.sHSmallHeadingContent}>
                    <div className={Styles.sHTop} >
                        <p className={Styles.sHPara}>{subHeading}</p>
                        <div className={Styles.sHSmallLine}></div>
                    </div>
                    <h1 className={Styles.sHSmallHeading}>{heading}</h1>
                    
                </div>
            </Container>

        </div>
    )
}

export default SectionHeading
