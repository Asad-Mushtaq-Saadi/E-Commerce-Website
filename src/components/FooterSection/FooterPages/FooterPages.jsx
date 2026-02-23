import React, { useContext } from 'react'
import Styles from './FooterPages.module.css'
import { PagesContext } from '../../../context/PagesContext'

const FooterPages = () => {

  const { pages } = useContext(PagesContext)

  return (
    <div className={Styles.fPagesContent}>
      <h1>Pages</h1>
      {pages.map((page) => (
        <p key={page.id} className={Styles.fPages}>
          {page.pageName}
        </p>
      ))}
    </div>
  )
}

export default FooterPages