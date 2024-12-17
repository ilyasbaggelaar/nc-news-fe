import {Link} from "react-router-dom"

function ArticleCard({ article }) {
  return (
    <li className="article-card">
    <Link to={`/articles/${article.article_id}`}>
      <div className="article-card-image">
        <img src={article["article_img_url"]} alt={article["title"]} />
      </div>
      <div className="article-card-info">
        <h3>{article["title"]}</h3>
      </div>
      </Link>
      <div className="article-card-info">
      <p><b>topic: </b>{article["topic"]}</p>
      </div>
    </li>
  );
}

export default ArticleCard;
