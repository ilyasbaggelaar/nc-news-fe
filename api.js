import axios from "axios";

export const getArticlesData = (topic, sort_by = "created_at", order = "desc") => {
  //   const url = topic
  //     ? `https://nc-news-f67l.onrender.com/api/articles?topic=${topic}`
  //     : `https://nc-news-f67l.onrender.com/api/articles`;

  const url = new URL(`https://nc-news-f67l.onrender.com/api/articles`);

  if (topic) url.searchParams.append("topic", topic);
  url.searchParams.append("sort_by", sort_by);
  url.searchParams.append("order", order);

  return axios.get(url.toString()).then(({ data }) => {
    return data;
  });
};

export const getSpecficArticleData = (article_id) => {
  return axios
    .get(`https://nc-news-f67l.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    });
};

export const getTopicsData = () => {
  return axios
    .get("https://nc-news-f67l.onrender.com/api/topics")
    .then(({ data }) => {
      return data;
    });
};

export const getCommentsData = (article_id) => {
  return axios
    .get(
      `https://nc-news-f67l.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleVotes = (article_id, increment) => {
  return axios
    .patch(`https://nc-news-f67l.onrender.com/api/articles/${article_id}`, {
      votes: increment,
    })
    .then(({ data }) => {
      return data;
    });
};

export const postCommentOnArticle = (article_id, newComment) => {
  return axios
    .post(
      `https://nc-news-f67l.onrender.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then(({ data }) => {
      return data;
    });
};

export const deleteCommentOnArticle = (comment_id) => {
  return axios
    .delete(`https://nc-news-f67l.onrender.com/api/comments/${comment_id}`)
    .then(({ data }) => {
      return data;
    });
};
