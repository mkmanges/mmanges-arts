import React from 'react'
import Link from 'gatsby-link'
import s from './index.module.scss'
import logo from '../../../static/logos/mm-arts-logo.png'

const Header = () => (
  <div className={s.header}>
    <Link to="/" className={s.logo__link}>
      <img src={logo} alt="logo" className={s.logo} />
    </Link>
    <div className={s.menu}>
      <Link to="/" className={s.menu__item}>Home</Link>
      <Link to="/about/" className={s.menu__item}>About</Link>
      <Link to="/gallery/" className={s.menu__item}>Gallery</Link>
      <Link to="/" className={s.menu__item}>Blog</Link>
    </div>
  </div>
)

export default Header
