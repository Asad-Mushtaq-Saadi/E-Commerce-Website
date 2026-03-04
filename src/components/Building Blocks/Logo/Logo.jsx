import React, { useContext } from 'react'
import Styles from './Logo.module.css'
import { LogoContext } from '../../../context/LogoContext'
import { Link } from 'react-router-dom'

const Logo = () => {

  const { logo } = useContext(LogoContext)
  console.log(logo);


  return (
    <div className={Styles.logo}>
      <Link
        to={'/home'}
        className={Styles.logoName}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {logo.name}
      </Link>

    </div>
  )
}

export default Logo
