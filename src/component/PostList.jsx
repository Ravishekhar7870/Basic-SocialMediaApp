import React, { useContext,useEffect, useState } from 'react'
import Post from './Post'
import { PostListitem } from '../Store/Post_list_store'
import Welcomemessage from './Welcomemessage';
import Loading from './Loading';
function PostList() {
  const contextobj=useContext(PostListitem);
  const postlist=contextobj.postlist;
    const AddLists=contextobj.AddLists;
    const [isfetching,setfetching]=useState(false);
    useEffect(()=>{
       setfetching(true)
       const controller=new AbortController();
       const signal=controller.signal;
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
         .then((data)=>{
            
             AddLists(data.posts);
             setfetching(false);
         });
        return ()=>{
          console.log("request ended")
          controller.abort();
        }
    },[])
  return (
    <>
    { isfetching && <Loading></Loading>}
    {    !isfetching && postlist.length===0 && <Welcomemessage></Welcomemessage>}
     { !isfetching && postlist.map((item)=> <Post key={item.id} item={item}></Post>)}
    </>
  )
}

export default PostList