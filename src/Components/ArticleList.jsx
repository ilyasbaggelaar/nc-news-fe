import { useEffect, useState } from "react";
import { getArticlesData } from "../../app";
import {ArticleCard} from "./ArticleCard"


function ArticleList() {

    const [articles, setArticlesData] = useState([])

    useEffect(() => {
    getArticlesData()
    .then((data) => {
        setArticlesData(data)
    })
    }, [])



    return (
        <div>
            <p>Hello</p>
            <ArticleCard/>
        </div>
    )

}

export default ArticleList

