import { getSingleArticle } from "../../api";
import { useNavigate } from "react-router-dom";

const Article= ({ article }) => {
  const navigate = useNavigate();

  function getArticle() {
    getSingleArticle(article.article_id);
    navigate(`/articles/${article.article_id}`);
  }

  return (
    <article key={article.article_id} onClick={getArticle}>
      <h4>{article.title}</h4>
      <img src={article.article_img_url} alt="" />
      <p>{article.author}</p>
      <p>{article.votes}</p>
      <p>{article.topic}</p>
      <p>{article.comment_count}</p>
      <p>{article.created_at}</p>
    </article>
  );
};
export default Article;
