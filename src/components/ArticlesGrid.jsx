import { getSingleArticle } from "../../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Articles.css";

const ArticlesGrid = ({ article }) => {
    const [error, setError] = useState(false)


  const navigate = useNavigate();

  function getArticle() {
    getSingleArticle(article.article_id).catch(() => {
        setError(true)
      });
    navigate(`/articles/${article.article_id}`);
  }

  return  error ? ( <h2 className="message"> Something went wrong! :/</h2>) : (
    <article key={article.article_id} onClick={getArticle}>
      <h2 className="title">{article.title}</h2>
      <img src={article.article_img_url} alt="" />
      <h3>Author: {article.author}</h3>
      <p>Votes: {article.votes}</p>
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Created at: {article.created_at}</p>
    </article>
  );
};
export default ArticlesGrid;
