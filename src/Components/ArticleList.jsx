import { useEffect, useState } from "react";
import { getArticlesData } from "../../api";
import  ArticleCard  from "./ArticleCard"



function ArticleList({topic, sort_by, order}) {

    const [articles, setArticlesData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    getArticlesData(topic, sort_by, order)
    .then((data) => {
        setArticlesData(data.articles)
        setLoading(false)
    })
    .catch((err) => {
        console.error("Error loading the articles: ", err);
        setLoading(false);
    })
    }, [topic, sort_by, order])

    if(loading) {
        return <p>loading...</p>
    }



    return (
        <div className="article-list">
            <ul className="article-list">
            {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
            ))}
            </ul>
        </div>
    )

}

export default ArticleList

