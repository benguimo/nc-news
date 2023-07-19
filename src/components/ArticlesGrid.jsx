import { getSingleArticle } from "../../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import user from '../images/user.png';
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
        <div className="userpic">
            <img src={user} alt="" />
            <h3>{article.author}</h3>
        </div>
      <p>Votes: {article.votes}</p>
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Created at: {article.created_at}</p>
    </article>
  );
};
export default ArticlesGrid;
