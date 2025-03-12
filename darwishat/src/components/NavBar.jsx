import React from 'react'
import githubLogo from '../assets/github icon.webp';
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://en.wikipedia.org/wiki/Mahmoud_Darwish"><p>Mahmoud Darwish</p></a>
      <a href="/"><h1>DARWISHAT</h1></a>
      <div className={styles.github_link}>
        <a href="https://github.com/kaisalayasa">Github </a>
        <img id={styles.github} src={githubLogo} alt="" />
      </div>
    </nav>
  )
}

export default NavBar