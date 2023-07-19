import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import goback from "../images/goback.png";
import thumbs from "../images/thumbs.png";
import user from '../images/user.png';
import { getSingleArticle } from "../../api";
import { getCommentsById } from '../../api';
import './SingleArticle.css'

const singleArticle = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
	const [comments, setComments] = useState([]);



  const { single_article } = useParams();

  useEffect(() => {
    setLoading(true);
    getSingleArticle(single_article).then((res)=>{
        setArticle(res)
        setLoading(false);
    })

    getCommentsById(single_article)
			.then((res) => {
				setComments(res);
			})
  }, []);

  

  return  loading ? (<h2 className="message">Loading...</h2>) : (
    <div className="article-page">
    <NavLink to="/articles"><img className="goback"  src={goback} alt="" /></NavLink>

        <article className="single-article"  key={article.article_id}>
        <h2>{article.title}</h2>
      <img className="main-img" src={article.article_img_url} alt="" />
      <h4><b>Author: </b>      {article.author}</h4>
      <p><b>Votes:</b>      {article.votes}</p>
      <p><b>Topic: </b>      {article.topic}</p>
      <p className="article-body"> {article.body}</p>
      <p><b>Created at:</b>      {article.created_at}</p>
      <p><b>Comments: </b>     {article.comment_count}</p>

      <ul className="comments">
			{comments.map((comment) => {
				return (
					<li className="each-comment" key={comment.comment_id}>
            <div className="comment-user">
            <img src={user} alt="" />
            <p>{comment.author}</p>

            </div>
				
            <p className="body"> {comment.body}</p>
          <div className="comment-votes">
          <img className="thumbs" src={thumbs} alt="" /> 
						<p>{comment.votes}</p>
          </div>
          
					
          </li>
				);
			})}
		</ul>

      </article> 
   
    </div>
 
  );
};
export default singleArticle;
