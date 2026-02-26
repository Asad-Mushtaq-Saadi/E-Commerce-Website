import React from 'react'
import Styles from './SectionHeading.module.css'
import Container from '../Building Blocks/Container/Container'
import SquareButton from '../Building Blocks/Buttons/SquareButton'

const SectionHeading = ({ subHeading, heading, buttonText }) => {
    return (
        <div className={Styles.sHParent}>
            <Container>
                <div className={Styles.sHContent}>
                    <div className={Styles.sHTop} >
                        <p className={Styles.sHPara}>{subHeading}</p>
                        <div className={Styles.sHLine}></div>
                    </div>
                    <h1 className={Styles.sHHeading}>{heading}</h1>
                    <SquareButton>{buttonText}</SquareButton>
                </div>
            </Container>

        </div>
    )
}

export default SectionHeading
