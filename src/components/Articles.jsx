import React from "react";
import { NavLink } from "react-router-dom";
import ArticlesGrid from "./ArticlesGrid";
import goback from "../images/goback.png";
import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { getTopics } from "../../api";
import "./Articles.css"


function Articles() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true);
    setError(false);
    getArticles().then((res) => {
      const newList = res.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
      setArticles(newList);
    }).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
      setError(true)
    });
    getTopics().then((res) => {
      setTopics(res);
    });
  }, [search]);


  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  function chooseTopic(e) {
    getArticles().then((res) => {
      const sortedBy = res.filter((article) => {
        return article.topic === e.target.innerText;
      });
      setArticles(sortedBy);
    });
  }


  function goBack() {
    getArticles().then((res) => {
      const newList = res.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
      setArticles(newList);
    });
  }



  return error ? ( <h2 className="message"> Something went wrong! :/</h2>) : loading ? (<h2 className="message">Loading...</h2>) : (
    <div className="list-page">
    <aside>
      <h2>Menu</h2>
      <ul className="topics">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <button onClick={chooseTopic}>{topic.slug}</button>
            </li>
          );
        })}
        <button onClick={goBack}>All</button>
      </ul>
      <div>
        <input
          placeholder="Search"
          type="text"
          id="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
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
