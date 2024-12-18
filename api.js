import axios from 'axios'

export const getArticlesData = () => {
    return axios.get(`https://nc-news-f67l.onrender.com/api/articles`).then(({data}) => {
        return data
    })
}

export const getSpecficArticleData = (article_id) => {
    return axios.get(`https://nc-news-f67l.onrender.com/api/articles/${article_id}`).then(({data}) => {
        return data
    })
}

export const getTopicsData = () => {
    return axios.get('https://nc-news-f67l.onrender.com/api/topics').then(({data}) => {
        return data
    })
}

export const getCommentsData = (article_id) => {
    return axios.get(`https://nc-news-f67l.onrender.com/api/articles/${article_id}/comments`).then(({data}) => {
        return data
    })

}

export const patchArticleVotes = (article_id, increment) => {
    return axios
    .patch(`https://nc-news-f67l.onrender.com/api/articles/${article_id}`, { votes: increment })
    .then(({ data }) => {
        return data;
    });
}