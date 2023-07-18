import React from "react";
import { NavLink } from "react-router-dom";
import Article from "./Article";
import goback from "../images/goback.png";
import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { getTopics } from "../../api";
import "./Articles.css"


function Articles() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      const newList = res.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
      setArticles(newList);
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



  return (
    <div className="list-page">
    <aside>
      <h3>Menu</h3>
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
      <h3>List of Articles</h3>
      <ul className="list">
        {articles.map((article) => {
          return <Article article={article} key={article.article_id} />;
        })}
      </ul>
    </main>
  </div>
  )
}

export default Articles
