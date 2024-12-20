import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteCommentOnArticle, getArticlesData, getCommentsData, patchArticleVotes, postCommentOnArticle } from "../../api";
import { getSpecficArticleData } from "../../api";
import AllComments from "../Components/Comments";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentsErrorMessage, setCommentsErrorMessage] = useState("")
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState(null);
  // const [deleteComment, setDeleteComment] = useState(null);

  const [deleting, isDeleting] = useState(false);
  const [votes, setVotes] = useState(0);
  const [voteError, setVotesError] = useState(null);

  useEffect(() => {
    getSpecficArticleData(article_id)
      .then((data) => {
        setArticle(data.article);
        setVotes(data.article.votes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error fetching article", err);
        setLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    getCommentsData(article_id)
      .then((data) => {
        setCommentsLoading(false);
        setComments(data.comments);
      })
      .catch((err) => {
        console.error("error fetching the comment", err);
        setCommentsLoading(false);
      });
  }, [article_id]);

  const handleVote = (increment) => {
    setVotes((prevVotes) => prevVotes + increment);
    setVotesError(null);

    patchArticleVotes(article_id, increment).then(() => {
        setVotesError("")
    })
    .catch((err) => {
      console.error("error updating the votes", err);
      setVotes((prevVotes) => prevVotes - increment);
      setVotesError("Vote failed, try again");
    });
  };

  const handleDelete = (commentId) => {

    setComments((prevComments) => 
      prevComments.map((comment) => 
        comment.comment_id === commentId
        ? {...comment, isDeleting: true} : comment
      )
    )
    deleteCommentOnArticle(commentId)
    .then(() => {
      setComments((prevComments) => 
        prevComments.filter((comment) => comment.comment_id !== commentId)
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const newComment = {
      body: comment,
      username: "jessjelly",
    }

    postCommentOnArticle(article_id, newComment)
    .then((response) => {
      setComment("")
      setCommentsErrorMessage("")
      setComments((prevComments) => [response.comment, ...prevComments])
    })
    .catch((err) => {
      setCommentsErrorMessage("Error placing comment!")
    })
    
  }

  if (loading) {
    return <p>loading...</p>;
  }

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <section>
      <div className="Article">
        <h1 className="Article-Title">{article.title}</h1>
        <img src={article.article_img_url} />
        <p className="Article-Date">
          {new Date(article.created_at).toLocaleString()}
        </p>
        <p className="votes-amount">{votes}</p>
        <div className="votes">
          <button
            className="vote-button"
            onClick={() => handleVote(1)}
            aria-label="Upvote"
          >
            <span class="material-symbols-outlined">thumb_up</span>
          </button>
          <button
            className="vote-button downvote"
            onClick={() => handleVote(-1)}
            aria-label="Downvote"
          >
            <span class="material-symbols-outlined">thumb_down</span>
          </button>
        </div>

        {/* Current issue is that the user can infintely vote up or down,
        research Firebase for authentication purposes so future
        functionality can be added that only existing users can vote
        up or down. */}

        <br></br>

        <p className="Article-Body">{article.body}</p>
        <br></br>
        <p className="Article-Topic">topic: {article.topic}</p>
      </div>

      {voteError && <p style={{ color: "red" }}>{voteError}</p>}


      <form onSubmit={handleSubmit}>
          <label htmlFor="submit-comment"> Add a comment... </label>
          <br />
          <textarea
          type="text"
          id="submit-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          />
          <input type="submit" value="submit" />


      </form>

      <div className="comments">
      <br />
        <h2 className="Comments-Header">Comments</h2>
        {commentsLoading ? (
          <p>Comments Loading...</p>
        ) : comments && comments.length > 0 ? (
          <ul className="comments-list">
            {comments.map((comment, index) => (
              <AllComments key={index} comment={comment} handleDelete={handleDelete}/>
            ))}
          </ul>
        ) : (
          <p>Comments not found.</p>
        )}
      </div>
    </section>
  );
}

export default Article;
