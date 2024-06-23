import { createContext, useReducer } from "react";

import React from 'react'
export const PostListitem=createContext({
    postlist:[],
    Addlist:()=>{},
    Deletelist:()=>{},
    AddLists:()=>{}
})

const Reducelist=(currList,action)=>{
      let newlist=currList;
      if(action.type==='DELETE'){
          newlist=currList.filter((item)=> item.id!=action.payload.post_id)
      }
      else if(action.type==='ADD'){
        newlist=[action.payload.postobj,...currList]
      }
      else if(action.type==='ADD_LISTS'){
          newlist=action.payload.posts;
      }
      return newlist;
}
function PostListProvider({children}) {
   const[postlist,dispatchlist]= useReducer(Reducelist,[]);
   const Addlist=(userid,title,post,likes,newtag)=>{
      const postobj={
        id:Date.now(),
        title:title,
        body:post,
        reactions:{
            likes:likes,
            dislikes:45
        },
        userid:userid,
        tags:newtag
     }
        dispatchlist(
            {
                type:'ADD',
                payload:{
                    postobj
                }
            }
        )
   }
   const AddLists=(posts)=>{
       dispatchlist(
        {
            type:'ADD_LISTS',
            payload:{
                posts
            }
        }
       )
   }
   const Deletelist=(post_id)=>{
      dispatchlist(
        {
            type:"DELETE",
            payload:{
                post_id
            }
        }
      )
   }
  return (
     <PostListitem.Provider value={{postlist,Addlist,Deletelist,AddLists}}>
        {children}
    </PostListitem.Provider>
  )
}
//  const Default_list=[{
//     id:'1',
//     title:'euro 2024',
//     body:'So exicted to go to Germany to watch euro match between spain and italy,Wonderful and very excited.',
//     reactions:10,
//     userid:'user_12',
//     tags:['football','euros2024','germany']
//  },
//  {
//     id:'2',
//     title:'Tour to manali',
//     body:'Excited to visit manali and enjoy the scenic landscape and snowfall',
//     reactions:5,
//     userid:"user_20",
//     tags:['winter','manali','snowfall']
//  }
// ]

export default PostListProvider