import React from 'react'
import Styles from './SearchPageSection.module.css'
import Container from '../Building Blocks/Container/Container'
import SquareButton from '../Building Blocks/Buttons/RoundedButton'

const SearchPageSection = () => {
  return (
    <div className={Styles.searchPageParent}>
        <Container>
            <div className={Styles.searchBar}>
                <input type="text" placeholder='Search For Your Desired Results'/>
                <SquareButton>Search</SquareButton>
            </div>
        </Container>
    </div>
  )
}

export default SearchPageSection
