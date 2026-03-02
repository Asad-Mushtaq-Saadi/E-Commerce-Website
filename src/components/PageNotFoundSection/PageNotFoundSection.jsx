import React from 'react'
import Styles from './PageNotFoundSection.module.css'
import Container from '../Building Blocks/Container/Container'
import SquareButton from '../Building Blocks/Buttons/SquareButton'

const PageNotFoundSection = () => {
  return (
    <div className={Styles.parent}>
         <Container>
            <div className={Styles.pNFContent}>
                <h1>404 Page Not Found</h1>
                <p>The page you requested does not exist. Click here to continue shopping.</p>
                <SquareButton>Home</SquareButton>
            </div>
         </Container>
    </div>
  )
}

export default PageNotFoundSection
