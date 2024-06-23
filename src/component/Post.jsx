import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostListitem } from '../Store/Post_list_store';
function Post({ item }) {
    const contextobj=useContext(PostListitem);
     const Deletelist=contextobj.Deletelist;
    return (
        <>
            <div className="card post_card" style={{ width: "25rem" }}>
                <span onClick={()=> Deletelist(item.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    <MdDelete></MdDelete>
                
                </span>

                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.body}</p>
                   
                    {item.tags.map((tag) => <span key={tag} className="badge text-bg-primary badge_item">{tag}</span>)}
                    
                </div>
                <span className="badge text-bg-danger reaction">{`Likes:${item.reactions.likes}`}</span>

            </div>
        </>
    )
}

export default Post