import React, { useContext, useRef } from 'react'
import { PostListitem } from '../Store/Post_list_store'

function CreatePost() {
  const {Addlist}=useContext(PostListitem);
   const Userid=useRef();
   const posttitle=useRef();
   const postContent=useRef();
   const reactions=useRef();
   const tags=useRef();
  const handlesubmit=(event)=>{
    event.preventDefault();
    console.log('clicked')
    const userid=Userid.current.value;
    Userid.current.value=""
    const  title=posttitle.current.value;
    posttitle.current.value=""
    const post=postContent.current.value;
    postContent.current.value=""
    const likes=reactions.current.value;
    reactions.current.value=""
    const curr=tags.current.value;
    tags.current.value="";
    const newtag=curr.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } )
    Addlist(userid,title,post,likes,newtag);
  }
  return (
    <>
      <form className='create-post' onSubmit={handlesubmit}>
      <div className="mb-3">
          <label htmlFor="User_id" className="form-label">Enter your User_id</label>
          <input type="text" className="form-control" id="User_id"  placeholder='User_id' ref={Userid}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Post-Title" className="form-label">Post-Title</label>
          <input type="text" className="form-control" id="Post-title"  placeholder='How are you feeling Today..' ref={posttitle} />
        </div>
        <div className="mb-3">
          <label htmlFor="Post-Content" className="form-label">Post-Content</label>
          <textarea rows="4" type="text" className="form-control" id="Post-Content"  placeholder='Tell us more about Today' ref={postContent} />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Reactions</label>
          <input ref={reactions} type="text" className="form-control" id="reactions"  placeholder='reactons please...' />
        </div>
        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">Hashtags</label>
          <input ref={tags} type="text" className="form-control" id="Tags"  placeholder='Enter your tags using spaces' />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </>
  )
}

export default CreatePost