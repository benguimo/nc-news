import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import goback from "../images/goback.png";
import { getSingleArticle } from "../../api";
import './SingleArticle.css'

const singleArticle = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  const { single_article } = useParams();
  useEffect(() => {
    getSingleArticle(single_article).then((res)=>{
        setArticle(res)
    }).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
      setError(true)
    });
  }, []);
  return  error ? ( <h2 className="message"> Something went wrong! :/</h2>) : loading ? (<h2 className="message">Loading...</h2>) : (
    <div className="article-page">
    <NavLink to="/articles"><img className="goback"  src={goback} alt="" /></NavLink>
        <article className="single-article"  key={article.article_id}>
        <h2>{article.title}</h2>
      <img src={article.article_img_url} alt="" />
      <h4>Author:       {article.author}</h4>
      <p>Votes:      {article.votes}</p>
      <p>Topic:       {article.topic}</p>
      <p><br /> {article.body} <br /></p>
      <p>Comments:      {article.comment_count}</p>
      <p>Created at:      {article.created_at}</p>
    </article>    
    </div>
 
  );
};
export default singleArticle;
