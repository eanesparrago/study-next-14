import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/lib/data'

// Fetch data with an API
// const getData = async slug => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//   if (!res.ok) {
//     throw new error('Something went wrong')
//   }

//   return res.json()
// }

export default async function SingleBlogPage ({ params }) {
  const { slug } = params

  // const post = await getData(slug)

  const post = await getPost(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post?.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>createdAt</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  )
}
