import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'
import { getPosts } from '@/lib/data'

// const getData = async () => {
//   // Use no-store if your data is updated frequently
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//   //   cache: 'no-store'
//   // })

//   // Use revalidate to refresh every specified interval
//   const res = await fetch('http://localhost:3000/api/blog', {
//     next: { revalidate: 3600 }
//   })

//   console.log('res', res.json())

//   if (!res.ok) {
//     throw new error('Something went wrong')
//   }

//   return res.json()
// }

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
}

export const metadata = {
  title: 'Blog'
}

export default async function BlogPage () {
  const posts = await getData()

  // const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}
