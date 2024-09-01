import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

function Feed() {
  return (
    <div className='w-[50%] border border-gray-300'>
      <div>
        <CreatePost/>
        <Tweet/>
        <Tweet/>
      </div>
    </div>
  )
}

export default Feed