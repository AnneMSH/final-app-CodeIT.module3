import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

function Navbar() {
  const links =[
    {
      id: 1,
      title: "Home",
      url:'/'
    },
    {
      id: 2,
      title: "About",
      url:'/about'
    },
    {
      id: 3,
      title: "Contact",
      url:'/contact'
    },
    {
      id:4,
      title: "Dashboard",
      url:'/dashboard'
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.webname}>LOGO</div>
      <div className={styles.links}>
        {links.map((links) => (
          <Link href={links.url} className={styles.linkss}>
            {links.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar