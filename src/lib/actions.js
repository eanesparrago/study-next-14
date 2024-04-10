'use server'

import { Post } from './models'
import { connectToDb } from './utils'
import { revalidatePath } from 'next/cache'

export const addPost = async formData => {
  // const title = formData.get('title')
  // const desc = formData.get('desc')
  // const slug = formData.get('slug')

  const { title, desc, slug, userId } = Object.fromEntries(formData)

  console.log(title, desc, slug, userId)

  try {
    connectToDb()

    const newPost = new Post({
      title,
      desc,
      slug,
      userId
    })

    await newPost.save()

    console.log('Saved post to DB')

    revalidatePath('/blog')
  } catch (error) {
    console.log(error)

    return { error: 'Something went wrong!' }
  }
}

export const deletePost = async formData => {
  const { postId } = Object.fromEntries(formData)

  try {
    connectToDb()

    await Post.findByIdAndDelete(postId)

    console.log('Deleted post from DB')

    revalidatePath('/blog')
  } catch (error) {
    console.log(error)

    return { error: 'Something went wrong!' }
  }
}
