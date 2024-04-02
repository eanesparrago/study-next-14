import Image from 'next/image'
import React from 'react'

import styles from './about.module.css'

export default function AboutPage () {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>

        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in,
          consequatur sunt inventore nam recusandae explicabo molestias laborum
          cum laboriosam, harum nobis nisi veritatis, blanditiis doloremque
          culpa illo dicta officiis.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>

          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>

          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src='/about.png' alt='About Image' fill className={styles.img} />
      </div>
    </div>
  )
}
