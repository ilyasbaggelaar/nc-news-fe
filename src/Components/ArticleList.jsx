import { useEffect, useState } from "react";
import { getArticlesData } from "../../app";
import  ArticleCard  from "./ArticleCard"


function ArticleList() {

    const [articles, setArticlesData] = useState([])

    useEffect(() => {
    getArticlesData()
    .then((data) => {
        setArticlesData(data.articles)
    })
    }, [])



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

