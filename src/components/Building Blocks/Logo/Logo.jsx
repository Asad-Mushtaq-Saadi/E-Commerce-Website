import React, { useContext } from 'react'
import Styles from './Logo.module.css'
import {LogoContext} from '../../../context/LogoContext'

const Logo = () => {

  const {logo} = useContext(LogoContext)
  console.log(logo);
  

  return (
    <div className={Styles.logo}>
        <h1>{logo.name}</h1>
      
    </div>
  )
}

export default Logo
