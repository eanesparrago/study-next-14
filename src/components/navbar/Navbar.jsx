import Link from 'next/link'
import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import { auth } from '@/lib/auth'

async function Navbar () {
  const session = await auth()

  console.log('session', session)

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>

      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar
