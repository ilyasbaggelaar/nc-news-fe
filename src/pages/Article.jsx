import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticlesData } from "../../app"
import { getSpecficArticleData } from "../../app";



function Article() {

    const {article_id} = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(article)

    useEffect(() => {
        getSpecficArticleData(article_id)
        .then((data) => {

            setArticle(data.article)
            setLoading(false)
        })
        .catch((err) => {
            console.error("error fetching article", err)
            setLoading(false)
        })
    }, [article_id])

    if(loading) {
        return <p>loading...</p>
    }

    if(!article){
        return<p>Article not found.</p>
    }




    return (
        <div className="Article">
        <h1>{article.title}</h1>
        <img src={article.article_img_url} />
        <p>{new Date(article.created_at).toLocaleString()}</p>
        <br></br>
        <p>{article.body}</p>
        <br></br>
        <p>topic: {article.topic}</p>

        </div>
    )
}

export default Article