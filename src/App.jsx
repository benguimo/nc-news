
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Comments from "./components/Comments";
import Users from "./components/Users";
import SingleArticle from "./components/SingleArticle";
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles/:single_article" element={<SingleArticle />} />
      </Routes>
    </Router>
  );
}

export default App
