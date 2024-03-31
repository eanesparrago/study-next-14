import Image from 'next/image'
import React from 'react'

import styles from './about.module.css'

export default function AboutPage () {
  return (
    <div>
      <div className={styles.imgContainer}>
        {/* <Image src='/about.png' alt='' width={500} height={500} /> */}
        <Image src='https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill />
      </div>
    </div>
  )
}
