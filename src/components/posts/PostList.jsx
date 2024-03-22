import React from 'react'
import PostCard from './PostCard'

const PostList = ({posts}) => {
  console.log(posts)
  return (
    !!posts && posts.map((post,index) => (
        <PostCard key={post?.id?post?.id:index} post={post}/>
    ))
  )
}

export default PostList
