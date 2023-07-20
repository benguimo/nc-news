import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getSingleArticle, patchArticleVotes } from "../../api";
import thumbs from "../images/thumbs.png"
import './SingleArticle.css'
import Comments from "./Comments";

const singleArticle = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [userVotes, setUserVotes] = useState(0);
	const [error, setError] = useState(false);



  const { single_article } = useParams();

  useEffect(() => {
    setLoading(true);
    getSingleArticle(single_article).then((res)=>{
        setArticle(res)
        setLoading(false);
    })


  }, []);




	const handleClick = () => {
		setUserVotes(userVotes + 1)

		patchArticleVotes(single_article).catch((err) => {
      setUserVotes(userVotes - 1)
      setError(true)
    })
    setError(false)
	}

  

  return  loading ? (<h2 className="message">Loading...</h2>) : (
    <div className="article-page">

      <article className="single-article"  key={article.article_id}>

          <h2>{article.title}</h2>

          <img className="main-img" src={article.article_img_url} alt="" />

          <h4><b>Author: </b>      {article.author}</h4>

          
          <div className="votes">
                <p>{article.votes + userVotes}</p>  
                <button className="thumbs-button" onClick={handleClick} disabled={userVotes > 0}>
                      <img src={thumbs} className="thumbs-article"/>   
                </button>
          {error ? (<p>Oops... Something went wrong!</p>) : null}     
          </div>


          <p><b>Topic: </b>      {article.topic}</p>
          <p className="article-body"> {article.body}</p>
          <p><b>Created at:</b>      {article.created_at}</p>
          <p><b>Comments: </b>     {article.comment_count}</p>
      

      <Comments/>
      </article> 
   
    </div>
 
  );
};
export default singleArticle;
