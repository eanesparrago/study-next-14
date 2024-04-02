import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'

export default function BlogPage () {
  const testPost = {
    img: 'https://images.pexels.com/photos/18254876/pexels-photo-18254876/free-photo-of-waves-by-the-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: 'createdAt',
    title: 'title',
    body: 'body',
    post: 'slug'
  }

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard post={testPost} />
      </div>
      <div className={styles.post}>
        <PostCard post={testPost} />
      </div>
      <div className={styles.post}>
        <PostCard post={testPost} />
      </div>
      <div className={styles.post}>
        <PostCard post={testPost} />
      </div>
      <div className={styles.post}>
        <PostCard post={testPost} />
      </div>
    </div>
  )
}
