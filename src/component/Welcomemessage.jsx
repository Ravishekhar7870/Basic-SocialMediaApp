import React, { useContext, useEffect } from 'react'
import { PostListitem } from '../Store/Post_list_store';

function Welcomemessage() {
    
    
  return (
    <center>
        <div className='welcome-message'>
        <h1>Oops!,There are no posts</h1>
        </div>
    </center>
  )
}

export default Welcomemessage