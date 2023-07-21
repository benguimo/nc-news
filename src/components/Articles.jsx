import React from "react";
import { NavLink } from "react-router-dom";
import { getTopics } from "../../api";
import ArticlesGrid from "./ArticlesGrid";
import goback from "../images/goback.png";
import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import "./Articles.css"


function Articles() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState(false);


  useEffect(() => {
        setLoading(true);
        setError(true)
        getArticles().then((res) => {
          const newList = res.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
          setArticles(newList);
          setLoading(false);
          setError(false)   
        });
        getTopics().then((res) => {
          setTopics(res);
        }) .catch((err) => {
          setLoading(false)
          setError(true)
      })
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
      }).catch((err) => {
        setError(error)
        alert("Sorry, we're experiencing some troubles here, please try again or contact us.")
    })
    }
  
  
    function goBack() {
      getArticles().then((res) => {
        const newList = res.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
        setArticles(newList);
      });
    }


    if (loading)  return (<h2 className='message'>Loading</h2>) 
    if(error) return (<h2 className='message'>Oops! Something wennt wrong...</h2>)

  return (
    <div className="list-page">
    <aside>
      <h2>Menu</h2>
      <ul className="topics">
             <NavLink to="/coding"><button onClick={chooseTopic}>Coding</button></NavLink> 
             <NavLink to="/football"><button onClick={chooseTopic}>Football</button></NavLink> 
             <NavLink to="/cooking"><button onClick={chooseTopic}>Cooking</button></NavLink> 
        <button onClick={goBack}>All</button>
      </ul>
            <p><br />Ticket-9.</p>
    </aside>
    <main>
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
