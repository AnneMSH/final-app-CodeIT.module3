import React from 'react'
import styles from './navbar.module.css'

function Navbar() {
  const links =[
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "About"
    },
    {
      id: 3,
      title: "Contact"
    },
  ]
  return (
  <div className={styles.container}>    
    <div className={styles.webname}>LOGO</div>
    <div className={styles.links}>
      {links.map((links) => (
        <div>{links.title}</div>
      ))}
    </div>
  </div>
  )
}

export default Navbar