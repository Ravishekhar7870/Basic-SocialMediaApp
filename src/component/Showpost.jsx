import React from 'react'
import PostList from './PostList'
import CreatePost from './CreatePost'

function Showpost({isSelected}) {
  return (
    <>
    {isSelected===true ? (<PostList/>):(<CreatePost></CreatePost>)}
    </>
  )
}

export default Showpost