import { useState, useEffect, useContext } from 'react';
import { UserContext } from './useContext/useContext';
import { useParams } from "react-router-dom";
import { postComment } from "../../api";
import { getCommentsById } from '../../api';
import thumbs from "../images/thumbs.png"
import user from "../images/user.png"





function Comments() {
    const  username  = useContext(UserContext)
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({username:`${username}`, body: ""});
    const[error, setError] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [loading, setLoading] = useState(true)

const { single_article } = useParams();

useEffect(() => {
        setLoading(true)
        setError(true)

    getCommentsById(single_article).then((res) => {
        setComments(res)
            setLoading(false)
            setError(false)     
    })
    .catch((err) => {
        setLoading(false)
        setError(true)
    })
        
}, [])


function handleSubmit(e) {
    e.preventDefault();
    postComment(+single_article, newComment).then((postedComment) => {
        return postedComment
    }).then((newComment) => {
        setComments((currentComments) => {
            return [newComment, ...currentComments]
        })

        setNewComment({username:`${username}`, body: ""})
             setSubmit(true)
    }).catch((err) => {
        setError(error)
        alert("Your comment couldn't be posted, please try again or contact us.")
    })
  }


 if (loading)  return (<h2 className='message'>Loading</h2>) 
 if(error) return (<h2 className='message'>Oops! Something wennt wrong...</h2>)
 
 return (
    <ul className="comments">
        <form className="CommentAdder" onSubmit={handleSubmit}>
            <h3>Post comment!</h3>
            <textarea placeholder="                                            Add a comment..."
                    className='new-comment'
                    type="text"
                    value={submit ? "                                               posted" : newComment.body}
                    onChange={(e) => {
                        setNewComment((currentBody) => { 
                            return { ...currentBody, body: e.target.value }})
                        }} required />

            <button className='post-button' disabled={submit || newComment.body.length > 210} type='submit'>Post</button>
            {submit ? <h5 className='posted-msg'>Posted!</h5> : null}
            {error ? (<p className='message'>Something went wrong :/</p>) : (<p className='characters'>{210 - newComment.body.length} characters left</p>)}
        </form>

    {comments.map((comment) => {
        return (
            <li className="each-comment" key={comment.comment_id}>
            <div className="comment-user">
            <img src={user} alt="" className='comment-user'/>
            <p>{comment.author}</p>
            </div>
                
            <p className="body"> {comment.body}</p>
          <div className="comment-votes">
                        <p>{comment.votes}</p>
                        <img src={thumbs} alt="" className='comment-thumb' />
          </div>      
          </li> 
        );
    })}
</ul>

)
}

export default Comments;
