import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://news-db-benguimo.onrender.com/api",
});

export const getArticles = () => {
  return usersApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};



export const getSingleArticle = (id) => {
    return usersApi.get(`/articles/${id}`).then(({ data }) => {
      return data.article;
    });
  };


  export const getTopics = () => {
    return usersApi.get("/topics").then((res) => {
      return res.data.topics;
    });
  };
  


  export const getCommentsById = (id) => {
    return usersApi.get(`/articles/${id}/comments`).then(({ data }) => {
      return data.comments;
    });
  };
  


  export const patchArticleVotes = (id) => {
    const patchBody = {
      "inc_votes" : 1
    };
    return usersApi.patch(`/articles/${id}`, patchBody)
                   .then(({ data }) => {
                    return data.article;
                   })
  }




  export const postComment = (id, newComment) => {
    const postBody = {
      username: "cooljmessy",
      body: newComment.body
    }
    
    return usersApi.post(`/articles/${id}/comments`, postBody).then(({ data }) => {
      return data[0];
    });
  };
  

