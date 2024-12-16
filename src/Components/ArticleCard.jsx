function ArticleCard({article}) {

return(
        <li className="article-card">
            <div className="article-card-image">
            <img src={article["article_img_url"]} alt={article["title"]} />
            </div>
            <div className="article-card-info">
                <h3>{article["title"]}</h3>
                <p>{article["topic"]}</p>
            </div>
        </li>
)
}

export default ArticleCard;