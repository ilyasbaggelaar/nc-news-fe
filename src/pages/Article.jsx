import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticlesData, getCommentsData } from "../../app"
import { getSpecficArticleData } from "../../app";
import AllComments from "../Components/Comments";



function Article() {

    const {article_id} = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true)
    const [comments, setComments] = useState(null)

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



    useEffect(() => {
        getCommentsData(article_id)
        .then((data) => {
            setCommentsLoading(false)
            setComments(data.comments)
        })
        .catch((err) => {
            console.error("error fetching the comment", err)
            setCommentsLoading(false)
        })
    }, [article_id])


    if(loading) {
        return <p>loading...</p>
    }

    if(!article){
        return<p>Article not found.</p>
    }

    if(commentsLoading) {
        return <p></p>
    }
    if(!comments){
        return <p>Comments not found</p>
    }


    return (
        <section>
        <div className="Article">
        <h1>{article.title}</h1>
        <img src={article.article_img_url} />
        <p>{new Date(article.created_at).toLocaleString()}</p>
        <br></br>
        <p>{article.body}</p>
        <br></br>
        <p>topic: {article.topic}</p>
        </div>

        <div className="comments">
            <ul className="comments-list">
            {comments.map((comment, index) => (
            <AllComments key={index} comment={comment}/>
            ))}
            </ul>
        </div>

        </section>
        
    )
}

export default Article