import React, { useContext } from 'react'
import Styles from './FooterPages.module.css'
import { PagesContext } from '../../../context/PagesContext'
import { Link } from 'react-router-dom'

const FooterPages = () => {

  const { pages } = useContext(PagesContext)

  return (
    <div className={Styles.fPagesContent}>
      <h1>Pages</h1>

      {pages.map((page) => {
        const url = `/${page.pageName.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <Link 
            to={url} 
            className={Styles.fPages} 
            key={page.id}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {page.pageName}
          </Link>
        );
      })}
    </div>
  )
}

export default FooterPages