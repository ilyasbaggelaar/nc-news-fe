import axios from 'axios'

export const getArticlesData = () => {
    return axios.get(`https://nc-news-f67l.onrender.com/api/articles`).then(({data}) => {
        return data
    })
}