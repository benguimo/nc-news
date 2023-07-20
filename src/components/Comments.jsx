import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";
import { getCommentsById } from '../../api';




function Comments() {
    const [comments, setComments] = useState([]);


const { single_article } = useParams();

useEffect(() => {
getCommentsById(single_article).then((res) => {
    setComments(res)
})

}, [])





return (
    <ul className="comments">
    {comments.map((comment) => {
        return (
            <li className="each-comment" key={comment.comment_id}>
            <div className="comment-user">
            <p>{comment.author}</p>
        
            </div>
                
            <p className="body"> {comment.body}</p>
          <div className="comment-votes">
                        <p>Votes: {comment.votes}</p>
          </div>      
          </li> 
        );
    })}
</ul>

)
}

export default Comments;
