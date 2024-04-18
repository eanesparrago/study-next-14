'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import styles from './links.module.css'
import NavLink from './navLink/NavLink'
import { handleLogout } from '@/lib/actions'

function Links ({ session }) {
  const [open, setOpen] = useState(true)

  const links = [
    {
      title: 'Homepage',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
    {
      title: 'Blog',
      path: '/blog'
    }
  ]

  // TEMPORARY
  const isAdmin = true

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {/* Link component fetches the page before we click it */}
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: 'Admin', path: '/admin' }} />
            )}

            <form action={handleLogout}>
              <button className={styles.logOut}>Log Out</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setOpen(prev => !prev)}
      >
        Menu
      </button>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map(link => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Links
