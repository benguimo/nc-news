import React from "react";
import { NavLink } from "react-router-dom";
import ArticlesGrid from "./ArticlesGrid";
import goback from "../images/goback.png";
import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import "./Articles.css"


function Articles() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    getArticles().then((res) => {
      const newList = res.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
      setArticles(newList);
      setLoading(false);
    })}, [search]);





  return loading ? (<h2 className="message">Loading...</h2>) : (
    <div className="list-page">
    <aside>
      <h2>Menu</h2>
            <p><br />Ticket-9.</p>
    </aside>
    <main>
    <NavLink to="/"><img className="goback"  src={goback} alt="" /></NavLink>
      <h1>List of Articles</h1>
      <ul className="list">
        {articles.map((article) => {
          return <ArticlesGrid article={article} key={article.article_id} />;
        })}
      </ul>
    </main>
  </div>
  )
}

export default Articles
