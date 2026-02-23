import Styles from './HeaderMainBar.module.css'
import Container from '../../Building Blocks/Container/Container'
import Logo from '../../Building Blocks/Logo/Logo'
import SearchBar from '../../Building Blocks/SearchBar/SearchBar'
import MainHeaderIcons from '../MainHeaderIcons/MainHeaderIcons'

const HeaderMainBar = () => {
    return (
        <div className={Styles.parent}>
            <Container>
                <div className={Styles.headerMainBarContent}>
                    <Logo />
                    <SearchBar />
                    <MainHeaderIcons />
                </div>
            </Container>

        </div>
    )
}

export default HeaderMainBar
